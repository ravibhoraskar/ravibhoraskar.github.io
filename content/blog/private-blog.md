---
title: "Building a Password-Protected Private Blog"
date: "2026-01-05T00:00:00"
---
In addition to this blog, I keep a private journal: a place to write
unfiltered thoughts and life events that might be interesting for me to go back
and read in the future. This blog is a static site built with Jekyll hosted
on [GitHub Pages](https://github.com/ravibhoraskar/ravibhoraskar.github.io), and
for the private blog, I started with a similar setup, except:
- in a private repo instead of a public one
- not hosted publicly on the internet

My workflow was simple: when I wanted to write, I'd commit a new post and push.
When I wanted to read, I'd pull the repo, run `hugo serve`, and
browse locally. (I used [hugo](https://gohugo.io/) instead of
[jekyll](https://jekyllrb.com/) this time around for no particular reason)

This worked fine, but it had an obvious limitation: I could only
read my journal from a machine with the repo cloned and Hugo installed. The
ideal solution would be a real website accessible on any device, but one that
only I could read.

## The Solution

I ended up using [Cloudflare Pages](https://developers.cloudflare.com/pages/)
for hosting and their
[Access](https://developers.cloudflare.com/cloudflare-one/access-controls/policies/)
product for authentication.

Pages is static site hosting, except that it also lets you use a private
repository (GitHub Pages requires either a public repo, or a paid subscription).
Like GitHub Pages, it automatically builds the site when the source repo gets
pushed to.

Access lets you put an authentication layer in front of any
site. You can restrict access to specific email addresses, and it
handles authentication via one-time codes sent to your inbox.

Now when I visit [my journal](https://ravi-journal.bhoraskar.com/) from any
device, I enter my email, receive a code, and I'm in. Anyone else just sees a
login page that won't accept their address.
