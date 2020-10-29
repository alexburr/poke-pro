# poke-pro

## Compiling/running
Requires: 
- NodeJS/NPM
- TypeScript compiler: `npm install -g typescript`
- LESS transpiler: `npm install -g less`
- CPX: `npm install -g cpx`
- Terser: `npm install terser -g`

To compile:
 - All: `npm run build`
 - All with minified JS: `npm run build-production`

 To compile files:
 - Typescript only: `npm run build-ts`
 - *(to update built JS):* `npm run build-ts-js`
 - LESS only: `npm run build-less`
 - COPY HTML only: `npm run build-copy-html`
 - COPY JS only: `npm run build-copy-js`
 - COPY IMAGES only: `npm run build-copy-images`

 To run:
 - Open `public/index.html` in a browser