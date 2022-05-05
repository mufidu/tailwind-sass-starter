# Tailwind and Sass Starter Template

A plain starter template for using Tailwind with Sass (without Next, Gatsby, Laravel, etc).

## Why Sass?

I personally like using Tailwind altogether with Sass because it makes me able to nest the styles. Also, the `@mixin` and `@extend` features really help me to avoid writing the same styles again and again, so the stylesheet is a bit more readable.

## Installation

Use the package manager [npm](https://www.npmjs.com) to use this template, or hit the "Use this template" button above.

```bash
npm install
```

## Running for development

```bash
npm start
```
Run the command above, and you are ready to go! To build your website, edit `index.html` to your liking, and style it by editing and/or adding SCSS files in the `sass` folder. Your SCSS files will be automatically processed and outputted to the `css` folder, upon every save.

During development, CSS output is not optimized since it will be slow to compress and purge everything on every change. 

## Building for production

```bash
npm run build
```

In production, CSS output in the `css` folder will be optimized using Tailwind purging and cssnano compression. Don't forget to update the glob pattern in `purge` option in [tailwind.config.js](https://github.com/mufidu/tailwind-sass-starter/blob/main/tailwind.config.js), if you change folder structure in your project.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://github.com/mufidu/tailwind-sass-starter/blob/main/LICENSE)
