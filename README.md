# Client-side HTML Bundler

This JavaScript script allows you to bundle HTML fragments into your web page using a custom attribute.

## Table of Contents

- [Client-side HTML Bundler](#client-side-html-bundler)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Usage](#usage)
  - [Options](#options)
  - [Contributing](#contributing)
  - [License](#license)
  - [Author](#author)

## Description

This HTML Bundler is designed to provide a quick and hassle-free solution for initiating projects without the need for extensive configuration. It simplifies the inclusion of HTML fragments into web pages using a custom attribute, enabling rapid development and modularization of code.

🚨 <br>
However, it's important to note that while the HTML Include Bundler serves as a convenient and lightweight option for small projects, it is not intended to replace more comprehensive HTML bundling solutions such as Webpack, Parcel, or Rollup. These advanced bundlers offer a wide range of features and optimizations suitable for larger and more complex web applications. The HTML Bundler is ideal for those seeking a minimalistic and straightforward approach to project setup, while acknowledging the presence of more robust alternatives in the web development ecosystem.
<br> 🚨

## Usage

To use the HTML Bundler in your web page, follow these steps:

1. Add htmlBunlder.js to your project and import the module in your main js file:

   ```javascript
   //script.js

   import bundleDocument from "path/to/documentBundler.js";
   ```

    This script use ES6 module feature. Be sur to specify type='module' when including your main js file to your index.html. 

    ```html 
    <script type='module' src='path/to/script.js'><script>
    ```
    <br>

2. Add the custom attribute include-html to any HTML element where you want to include an external HTML fragment:

   ```html
   <div include-html="path/to/your/external-fragment.html"></div>
   ```
    <br>

3. Call the bundle() function to load and include the HTML fragments:

   ```javascript
   bundleDocument().then(() => {
     // rest of your code
   });

   //or if you prefer:
   bundleDocument().then(onBundledDocument);

   function onBundledDocument() {
    // ...rest of your code
    };
   ```
    <br>

4. <span style='background-color:slateblue;border-radius:5px;padding:5px;font-size:large'>🪄</span> 
Your HTML fragments will be loaded and included dynamically, replacing the elements with the include-html attribute.
<br>

## Options

This HTML Bundler does not have any specific options or configuration settings. However, you can customize the name of the custom attribute (include-html) by modifying the customAttribute variable in the script if needed.


## Contributing

Contributions to the HTML Bundler are welcome. If you have any suggestions, find a bug, or want to contribute improvements, please open an issue or submit a pull request on the GitHub repository.

## License

This script is open-source and available under the MIT License.

## Author

Julien Lemarchand

