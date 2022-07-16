format:
	deno fmt index.ts

build:
	deno compile --allow-read --allow-write --allow-env --allow-run --unstable --output _awsd index.ts