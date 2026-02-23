PYTHON=venv/bin/python

# targets that aren't filenames
.PHONY: all clean deploy serve

all: static/bib/pubs.bib content/publications.md

BUILDARGS :=

# Build the site
public/index.html: content/publications.md
	hugo $(BUILDARGS)

# Build the publication files - generate into a temp directory, then assemble
generated/cspubs.html: bib/cspubs.bib bib/publications.tmpl
	mkdir -p generated
	$(PYTHON) bibble/bibble.py $+ > $@

generated/patentpubs.html: bib/patentpubs.bib bib/publications.tmpl
	mkdir -p generated
	$(PYTHON) bibble/bibble.py $+ > $@

generated/posterpubs.html: bib/posterpubs.bib bib/publications.tmpl
	mkdir -p generated
	$(PYTHON) bibble/bibble.py $+ > $@

generated/otherpubs.html: bib/otherpubs.bib bib/publications.tmpl
	mkdir -p generated
	$(PYTHON) bibble/bibble.py $+ > $@

# Concatenate the bibtex files together to get a single bibtex file to download
static/bib/pubs.bib: bib/cspubs.bib bib/patentpubs.bib bib/posterpubs.bib bib/otherpubs.bib
	mkdir -p static/bib
	cat $+ > $@

# Assemble the publications page from generated HTML snippets
content/publications.md: generated/cspubs.html generated/patentpubs.html generated/posterpubs.html generated/otherpubs.html
	@echo '---' > $@
	@echo 'title: Publications' >> $@
	@echo '---' >> $@
	@echo '' >> $@
	@echo '<p>' >> $@
	@echo '<a href="/bib/pubs.bib">Download BibTeX.</a>' >> $@
	@echo '</p>' >> $@
	@echo '' >> $@
	@echo '<h2> Peer-reviewed Conference and Workshop Publications</h2>' >> $@
	@echo '' >> $@
	@cat generated/cspubs.html >> $@
	@echo '' >> $@
	@echo '<h2> Patents </h2>' >> $@
	@echo '' >> $@
	@cat generated/patentpubs.html >> $@
	@echo '' >> $@
	@echo '<h2> Posters and Short Publications</h2>' >> $@
	@echo '' >> $@
	@cat generated/posterpubs.html >> $@
	@echo '' >> $@
	@echo '<h2> Other Publications</h2>' >> $@
	@echo '' >> $@
	@cat generated/otherpubs.html >> $@

clean:
	$(RM) -r public generated content/publications.md

serve: all
	hugo serve

deploy: clean all
	hugo
	git commit -m "Makefile auto commit: "`date`
