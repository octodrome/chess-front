# Chess-front
![alt text](./public/img/app_screenshot.png?raw=true)

A vue.js/typescript app to play chess against computer or distant opponents.

- github repository : https://github.com/colinfaivre/chess-front
- github project : https://github.com/users/colinfaivre/projects/2

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

pieces images :
https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces

stockfish.js library :
https://www.npmjs.com/package/stockfish

web workers in vue.js with worker-plugin from google :
https://braincoke.fr/blog/2020/03/use-web-workers-with-vue/#web-workers
https://github.com/GoogleChromeLabs/worker-plugin
https://logaretm.com/blog/2019-12-21-vuex-off-mainthread/

Stockfish commands :
$stockfish
>uci
>ucinewgame
>position startpos
>go movetime 1000
>position startpos moves e2e4
>go movetime 1000
>position startpos moves e2e4 e7e5
etc...
