Ravi's website
===================

This site uses [Hugo](https://gohugo.io/) and [bibble](https://github.com/sampsyo/bibble) to generate a static website
complete with publications. It uses [Bootstrap](https://github.com/twbs/bootstrap) to make things pretty. Credits to the
[SAMPA website](http://sampa.cs.washington.edu/) off which the original Jekyll version was cloned.


Editing
-------

Most pages are just Markdown or HTML files that you can edit directly. News is
generated from content/blog.


News Items and Blog Posts
-------------------------

For both long-form blog posts and short news updates, we use Hugo's content system. To post a new item of either type, you create a file in the `content/blog` directory using the naming convention `title-for-url.md`.

The file must begin with [YAML front matter][yfm]. For news updates, use this:

    ---
    title: "Short news title"
    date: "YYYY-MM-DD"
    shortnews: true
    ---

For full blog posts, use this format:

    ---
    title: "Some Great Title Here"
    date: "YYYY-MM-DD"
    ---

And concoct a page title for your post. The body of the post goes after the `---` in either case.

[yfm]: https://gohugo.io/content-management/front-matter/

Bibliography
----------------------
The publications page is generated using pybtex. It reads the .bib files in the `bib/` directory and generates HTML tables for each publication category. The URL to the paper is read from the bibtex if it exists, and the default location (`static/papers/{key}.pdf`) is scanned for a PDF otherwise. To change the default location, edit the `papersdir` and `staticpapersdir` variables in `bibble/bibble.py`.

Building and Deploying
----------------------

The requirements for building the site are:

* [Hugo][]: Install via `brew install hugo` (macOS) or see [Hugo installation docs](https://gohugo.io/installation/)
* [Pybtex][]: Included in the Python virtual environment
* [bibble][]: included in the repo (`bibble/`), tweaked for Python 3

### Initial Setup

Create and activate the Python virtual environment (one-time setup):

```bash
python3 -m venv venv
source venv/bin/activate
pip install pybtex jinja2
```

### Building

`make all` generates the publications page from the bib files and creates the combined bibtex download file.

`make serve` runs `make all` then starts the Hugo development server. Preview the site at http://localhost:1313.

`hugo` compiles the website content to the `public` directory.

### Deployment

`make deploy` cleans, rebuilds everything, and commits.

To build for production:

```bash
make all
hugo
```

The generated site will be in the `public/` directory.

[Hugo]: https://gohugo.io/
[bibble]: https://github.com/sampsyo/bibble/
[pybtex]: https://pybtex.org/
