# import-css

[![NPM version][npm]][npm-url]

[npm]: https://img.shields.io/npm/v/import-css.svg
[npm-url]: https://npmjs.com/package/import-css

Load CSS asynchronously without render blocking in the given order.

# Install

```bash
npm i -S import-css
# or
yarn add import-css
```

# About

`import-css` contains 2 variants of `importCSS` function

1. `link.js` variant uses `<link>` tag. If you want to import multiple styles for "progressive loading" recommended move all function calls before `</body>`.

2. `link-in-body.js` also uses`<link>` tag, but this variant a little lighter than `link.js` because of restricted to use only in `<body>`.

Also exist `*-async.js` variants of both files, where you can import CSS outside of queue.

# API

### importCSS(String url, String media)

Files: `link.js`, `link-in-body.js`

### importCSS(String url, String media, Boolean async)

Files: `link-async.js`, `link-in-body-async.js`

# Examples

critical css
```css
section, footer {
	display: none;
}
```

`section.css`
```css
section {
	display: block;
	color: green;
}
```

`footer.css`
```css
footer {
	display: block;
	color: red;
}
```

`index.html` with `link.js`
```html
<!DOCTYPE html>
<html>
	<head>
		<script>(link.js)</script>
		<style>(critical css)</style>
	</head>
	<body>
		<header>
			<h1>Header</h1>
		</header>
		<section>
			<h1>Section</h1>
		</section>
		<footer>
			<h1>Footer</h1>
		</footer>
		<script>importCSS('section.css')</script>
		<script>importCSS('footer.css')</script>
	</body>
</html>
```

---
[![NPM](https://nodei.co/npm/import-css.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/import-css/)
