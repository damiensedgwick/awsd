format:
	deno fmt index.ts

build:
	deno compile --allow-read --allow-write --allow-env --allow-run --unstable --output awsd index.ts