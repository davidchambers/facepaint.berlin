.PHONY: all
all:
	node_modules/.bin/tailwindcss --content docs/index.html >tailwind.css
	bash -c 'mv tailwind.css docs/tailwind@$$(md5 -q tailwind.css).css'

.PHONY: twsort
twsort:
	cat docs/index.html | scripts/twsort | sponge docs/index.html
