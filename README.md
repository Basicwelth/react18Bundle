# Webpack v.5 & React v.18 & SCSS

## Установка через

```shell
npm ci
```
## Babel config в webpack.branding.dev.sass.js

```jsx
  loader: "babel-loader",
  options: {
    presets: [
        "@babel/preset-env",
        ["@babel/preset-react", {"runtime": "automatic"}]
    ]
  }
```

## Autoprefixer config в webpack.branding.dev.sass.js
```jsx
    loader: "postcss-loader",
    options: {
        postcssOptions: {
            plugins: [
                require('autoprefixer')
            ]
        }
    }
```
