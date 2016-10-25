PYTHON=python2.7

# targets that aren't filenames
.PHONY: all clean deploy

all: bib/pubs.bib _site/index.html

BUILDARGS :=
_site/index.html:
	jekyll build $(BUILDARGS)

#Build the publication files to include in publications.html
_includes/cspubs.html: bib/cspubs.bib bib/publications.tmpl
	mkdir -p _includes
	$(PYTHON) bibble/bibble.py $+ > $@

_includes/patentpubs.html: bib/patentpubs.bib bib/publications.tmpl
	mkdir -p _includes
	$(PYTHON) bibble/bibble.py $+ > $@

_includes/posterpubs.html: bib/posterpubs.bib bib/publications.tmpl
	mkdir -p _includes
	$(PYTHON) bibble/bibble.py $+ > $@

_includes/otherpubs.html: bib/otherpubs.bib bib/publications.tmpl
	mkdir -p _includes
	$(PYTHON) bibble/bibble.py $+ > $@

# Concatenate the bibtex files together to get a single bibtex file to download
bib/pubs.bib: bib/cspubs.bib bib/patentpubs.bib bib/posterpubs.bib bib/otherpubs.bib
	cat $+ > $@

_site/index.html: $(wildcard *.html) _includes/cspubs.html _includes/patentpubs.html _includes/posterpubs.html _includes/otherpubs.html _config.yml \
	_layouts/default.html

clean:
	$(RM) -r _site _includes/*pubs.html

deploy: clean all
	git commit -m "Makefile auto commit: "`date`
