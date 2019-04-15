Quick start for html and sass development (source from Bootstrap 4.0.0-alpha.6)

## Quick start

1. Clone the repository and run `npm install` or `yarn install`.

2. run `grunt server` + turn on live-reload on your browsers.

3. Start your development at `docs/ejs/index.ejs` and `docs/scss/main.scss`

### Notes
- If you dont want to use ejs, you can directly edit the result html file, remember to delete the ejs so it does not override your work.
- If you choose to load bootstrap as an external source file, remove it in your main.sass so it does not get duplicated.
- If you have theme, drop it in `scss` folder and include it in main.scss


## Features
- Include ejs template for reusable components.
- Watch and Live-reload for convenient development.
- Easy include or exclude bootstrap sources in your code
- Include a small sass framework with easy grid to start with

## Grunt tasks

`grunt clean`: clean up the copied and generated codes.

`grunt setup-bootstrap`: copy bootstrap source and font-awesome over to `scss` folder.

`grunt setup-external-bootstrap`: copy only bootstrap distribution files (css and js). Remember to include `bootstrap.min.css` it in your HTML files.

`grunt dist`: generate distribution files.

For more tasks, see `Gruntfile.js`



