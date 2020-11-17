# poke-pro

## Compiling/running
Requires: 
- NodeJS/NPM
- TypeScript compiler: `npm install -g typescript`
- LESS transpiler: `npm install -g less`
- LESS clean-css plugin: `npm install -g less-plugin-clean-css`
- CPX: `npm install -g cpx`
- Terser: `npm install terser -g`

To compile:
 - All: `npm run build-dev`
 - All with minified JS and CSS: `npm run build-release`

 To compile files:
 - Typescript only: `npm run build-ts`
 - *(to update built JS):* `npm run build-ts-js`
 - LESS only: `npm run build-less`
 - LESS only, minified: `npm run build-less-compress`
 - COPY HTML only: `npm run build-copy-html`
 - COPY JS only: `npm run build-copy-js`
 - COPY IMAGES only: `npm run build-copy-images`

 To run:
 - Open `public/index.html` in a browser