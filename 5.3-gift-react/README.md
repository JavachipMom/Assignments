@@ -4,13 +4,15 @@
    - Install webpack `$ npm install --save-dev webpack`
    - Run `$ npm install --save-dev babel-cli`
    - Create `.babelrc` file `$ touch .babelrc`
 -    ```javascript
 +    
 +  ```js
        {
          "presets": ["es2015", "react"]
        }
 -    ```
 +  ```
    - Add to `webpack.config.js`
 -  ```javascript
 +
 +```js
      module: {
        loaders: [
          {
 @@ -20,7 +22,7 @@
          }
        ]
      }
 -  ```
 +```
    - `$ npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react`
    - `$ npm install --save-dev react react-dom`
