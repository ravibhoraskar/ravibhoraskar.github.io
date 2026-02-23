#!/usr/bin/env python3
"""Convert Jekyll posts to Hugo format."""

import os
import re
from pathlib import Path
from datetime import datetime

JEKYLL_POSTS = Path("/Users/rav/Pikachu/ravibhoraskar.github.io/_posts")
HUGO_POSTS = Path("/Users/rav/Pikachu/ravibhoraskar.github.io/hugo_migration/content/blog")

# Fields to keep in Hugo front matter
KEEP_FIELDS = {'title', 'date', 'categories', 'tags', 'draft', 'shortnews'}

# Fields to remove (Jekyll/WordPress specific)
REMOVE_FIELDS = {'layout', 'type', 'parent_id', 'password', 'status', 'meta', 'author', 'published'}

def parse_front_matter(content):
    """Parse YAML front matter manually."""
    match = re.match(r'^---\s*\n(.*?)\n---\s*\n(.*)', content, re.DOTALL)
    if not match:
        return {}, content

    fm_str = match.group(1)
    body = match.group(2)

    fm = {}
    current_key = None
    current_list = None

    for line in fm_str.split('\n'):
        # Skip empty lines
        if not line.strip():
            continue

        # Check for list item
        if line.startswith('- ') and current_key:
            if current_list is None:
                current_list = []
            current_list.append(line[2:].strip())
            fm[current_key] = current_list
            continue

        # Check for nested content (indented) - skip it
        if line.startswith('  ') and not line.startswith('- '):
            continue

        # Check for key: value
        if ':' in line:
            key, _, value = line.partition(':')
            key = key.strip()
            value = value.strip()

            # Reset list tracking
            current_key = key
            current_list = None

            if value:
                # Remove quotes if present
                if (value.startswith('"') and value.endswith('"')) or \
                   (value.startswith("'") and value.endswith("'")):
                    value = value[1:-1]
                fm[key] = value

    return fm, body

def normalize_date(date_str):
    """Normalize date string to Hugo-compatible format."""
    if not date_str:
        return None

    # Remove quotes if present
    date_str = date_str.strip().strip('"').strip("'")

    # Handle timezone formats like "-07:00" -> "-0700"
    date_str_tz = re.sub(r'([+-]\d{2}):(\d{2})$', r'\1\2', date_str)
    # Handle nanoseconds by truncating to microseconds
    date_str_tz = re.sub(r'(\.\d{6})\d+', r'\1', date_str_tz)

    # Try various date formats
    formats = [
        # Full datetime with microseconds and timezone
        "%Y-%m-%d %H:%M:%S.%f %z",
        # Datetime with timezone
        "%Y-%m-%d %H:%M:%S %z",
        "%Y-%m-%d %H:%M %z",
        # Date only
        "%Y-%m-%d",
        "%Y-%m-%d %H:%M:%S",
        "%Y-%m-%d %H:%M",
    ]

    for fmt in formats:
        try:
            dt = datetime.strptime(date_str_tz, fmt)
            # Return in ISO format
            if dt.tzinfo:
                return dt.strftime("%Y-%m-%dT%H:%M:%S%z")
            else:
                return dt.strftime("%Y-%m-%dT%H:%M:%S")
        except ValueError:
            continue

    # If all else fails, try to extract just the date part and normalize it
    match = re.match(r'(\d{4})-(\d{1,2})-(\d{1,2})', date_str)
    if match:
        year, month, day = match.groups()
        return f"{year}-{int(month):02d}-{int(day):02d}"

    return None

def convert_front_matter(fm, filename):
    """Convert Jekyll front matter to Hugo format."""
    hugo_fm = {}

    for key, value in fm.items():
        if key in REMOVE_FIELDS:
            continue
        if key == 'date':
            normalized = normalize_date(value)
            if normalized:
                hugo_fm['date'] = normalized
        elif key in KEEP_FIELDS:
            hugo_fm[key] = value

    # If no date in front matter, try to extract from filename
    if 'date' not in hugo_fm:
        match = re.match(r'^(\d{4})-(\d{1,2})-(\d{1,2})-', filename)
        if match:
            year, month, day = match.groups()
            hugo_fm['date'] = f"{year}-{int(month):02d}-{int(day):02d}"

    return hugo_fm

def convert_content(content):
    """Convert Jekyll Liquid tags to Hugo equivalents."""
    # Replace {{ site.baseurl }} and {{ site.base }} with empty string (relative paths)
    content = re.sub(r'\{\{\s*site\.baseurl\s*\}\}', '', content)
    content = re.sub(r'\{\{\s*site\.base\s*\}\}', '', content)

    # Convert Kramdown image attributes to HTML img tags
    # Pattern: ![alt](url "title"){: width="300" }
    def replace_kramdown_image(match):
        alt = match.group(1)
        url = match.group(2)
        title = match.group(3) or ""
        attrs = match.group(4)
        # Extract width from attrs
        width_match = re.search(r'width="?(\d+)"?', attrs)
        width = width_match.group(1) if width_match else ""

        img_tag = f'<img src="{url}" alt="{alt}"'
        if title:
            img_tag += f' title="{title}"'
        if width:
            img_tag += f' width="{width}"'
        img_tag += ' />'
        return img_tag

    content = re.sub(
        r'!\[([^\]]*)\]\(([^)"\s]+)(?:\s+"([^"]*)")?\)\{:\s*([^}]+)\}',
        replace_kramdown_image,
        content
    )

    return content

def get_hugo_filename(jekyll_filename):
    """Convert Jekyll filename to Hugo filename (remove date prefix)."""
    # Jekyll: 2023-10-4-cool-things-i-saw-in-tokyo.md
    # Hugo: cool-things-i-saw-in-tokyo.md
    match = re.match(r'^\d{4}-\d{1,2}-\d{1,2}-(.+)$', jekyll_filename)
    if match:
        return match.group(1)
    return jekyll_filename

def needs_quoting(value):
    """Check if a YAML string value needs quoting."""
    if not isinstance(value, str):
        return False
    # Quote if contains special YAML characters
    special_chars = [':', '#', '{', '}', '[', ']', ',', '&', '*', '?', '|', '-', '<', '>', '=', '!', '%', '@', '`', '\n', '"', "'"]
    return any(c in value for c in special_chars) or value.startswith(' ') or value.endswith(' ')

def format_front_matter(fm):
    """Format front matter as YAML."""
    if not fm:
        return "---\n---\n"

    lines = ["---"]
    for key, value in fm.items():
        if isinstance(value, list):
            lines.append(f"{key}:")
            for item in value:
                if needs_quoting(item):
                    escaped = item.replace('"', '\\"')
                    lines.append(f'  - "{escaped}"')
                else:
                    lines.append(f"  - {item}")
        elif isinstance(value, bool):
            lines.append(f"{key}: {str(value).lower()}")
        elif needs_quoting(value):
            # Quote strings with special characters
            escaped = value.replace('"', '\\"')
            lines.append(f'{key}: "{escaped}"')
        else:
            lines.append(f"{key}: {value}")
    lines.append("---")
    return "\n".join(lines) + "\n"

def convert_post(jekyll_path, hugo_dir):
    """Convert a single Jekyll post to Hugo format."""
    with open(jekyll_path, 'r', encoding='utf-8') as f:
        content = f.read()

    fm, body = parse_front_matter(content)

    hugo_fm = convert_front_matter(fm, jekyll_path.name)
    hugo_content = convert_content(body)

    # Get new filename
    hugo_filename = get_hugo_filename(jekyll_path.name)

    # Ensure .md extension
    if hugo_filename.endswith('.html'):
        hugo_filename = hugo_filename[:-5] + '.md'

    hugo_path = hugo_dir / hugo_filename

    # Write Hugo post
    with open(hugo_path, 'w', encoding='utf-8') as f:
        f.write(format_front_matter(hugo_fm))
        f.write(hugo_content)

    return hugo_path

def main():
    HUGO_POSTS.mkdir(parents=True, exist_ok=True)

    posts = list(JEKYLL_POSTS.glob("*"))
    print(f"Found {len(posts)} posts to convert")

    for post in sorted(posts):
        if post.is_file():
            hugo_path = convert_post(post, HUGO_POSTS)
            print(f"Converted: {post.name} -> {hugo_path.name}")

    print(f"\nDone! Converted {len(posts)} posts to {HUGO_POSTS}")

if __name__ == "__main__":
    main()
