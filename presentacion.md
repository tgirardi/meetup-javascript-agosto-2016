# Boilerplate con Webpack y otras bestias

## Tomás Girardi

CEO y Fundador de Datamed - http://datamed.cl

* twitter: @1024ktips
* instagram: @1024ktips
* github: tgiardi
* instagram: /in/tomasgirardi
* email: tgrardi@gmail.com

---

## Webpack

![webpack](https://topheman.github.io/webpack-babel-starter/assets/974262647c82057b6078c432841a53ea.png)

**Module Bundler**

---

```html
<html>
<head>
  <script src="moment.js"></script>
  <script src="jquery.js"></script>
  <script src="bootstrap.js"></script>
  <script src="bootstrap-typeahead.js"></script>
  <script src="bootstrap.js"></script>
  <script src="slyder.js"></script>
  <script src="app.js"></script>
  <script src="todo-form.js"></script>
  <script src="todo-list.js"></script>
  <script src="todo-item.js"></script>
  <!-- ... -->
</head>
```
---

```html
<html>
<head>
  <script src="bundle.js"></script>
</head>
```

---

```html
<html>
<head>
  <script src="jquery.js"></script>
  <script src="bootstrap.js"></script>
</head>
```

```html
<html>
<head>
  <script src="bootstrap.js"></script>
  <script src="jquery.js"></script>
</head>
```

---

![deps](https://www.evernote.com/shard/s692/sh/47d60a6f-50f9-430c-b50d-5ed1fda5783b/42b046dfed18e2e9/res/eab2f1e5-a1cd-4692-8cf0-615ca66cab1c/skitch.png)

---

![deps](https://www.evernote.com/shard/s692/sh/47d60a6f-50f9-430c-b50d-5ed1fda5783b/42b046dfed18e2e9/res/eab2f1e5-a1cd-4692-8cf0-615ca66cab1c/skitch.png)

```javascript
// app.js
require('bootstrap-typeahead')
require('bootstrap')

// bootstrap.js
require('jquery')
```

---

![cats](https://www.evernote.com/shard/s692/sh/82fcdf3b-e243-44d5-9d0a-7f7b12d3408c/41fab05bbaf68b1b/res/36b609f3-91a7-44de-a499-3d2030603004/skitch.png)

---

```javascript
// js
import divButton from './lib/div-button.js'

// images
require('./img/happy-cat.jpg')
require('./img/meh-cat.gif')
require('./img/grumpy-cat.png')

// css
require('./styles/style.css')
``` 

---

## Babel

![es6](http://instacod.es/file/108593)

---

### Probemos!

https://babeljs.io/repl

```javascript
import React, { PropTypes, Component } from 'react'

const Cat = ({ value }) => (
  <div class="cat" data-value={value}>
    <img src={`./img/${value}-cat.jpg`} />
  </div>
)

class CatReviews extends Component {
  constructor() {
    super()
    this.clickCat = this.clickCat.bind(this)
  }

  render() {
    const { label } = this.props
    let { width } = this.props
    if (width < 100) {
      size = 100
    }

    return (
      <div>
        <h3>{label}</h3>
        <Cat onClick={this.clickCat} value="happy" />
        <Cat onClick={this.clickCat} value="meh" />
        <Cat onClick={this.clickCat} value="grumpy" />
      </div>
    )
  }
}
```

---

### JSX

```jsx
const Title = ({ label }) => (
   <h3>{label}</h3>
)

const App = () => (
   <div>
     <Title label="Hola Mundo!" />
     <ul>
        <li>foo</li>
        <li>bar</li>
     </ul>
   </div>
)
```

---

### Primer Ejemplo

Webpack cli + Babel

* corriendo modulos npm locales con npm
* transpilando usando babel-cli
* presets
* corriendo wepack
* corriendo webpack-dev-server

---

## ESLint

![eslint](https://worldvectorlogo.com/logos/eslint.svg)

* traditional linting (looking for problematic patterns)
* style checking (code style)

### Presets

Airbnb 💕💕💕

### Sublime Text

* sublime linter
* eslint formatter

---

## Flowtype

![flow](http://www.braveterry.com/wp-content/uploads/2014/11/flow-hero-logo.png)

Flow can catch common bugs in JavaScript programs before they run, including:

* silent type conversions
* null dereferences
* and the dreaded undefined is not a function

---

### Segundo Ejemplo

Webpack + Babel + EsLint + Flow + Less

* corriendo eslint usando la consola
* presets de eslint
* corriendo eslint durante empaquetamiento
* corriendo flow usando la consola
* corriendo flow durante empaquetamiento
* jsx
* babelrc
* composición de webpack config
* less loader
