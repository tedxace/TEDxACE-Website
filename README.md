# Official TEDxACE Website 2021-22

## How to develop this
Like a normal html/css/js each file can be edited as you like. When switching from one page to another while editing the file - For example if you open the `index.html` file in your browser to see how it looks and then click on the **About Us** section it would not work. To test how it would be when in production i.e. the final website here are the steps -

1) Ensure you have `NodeJs` installed on your local machine. If you are installing this for the first time please look at [nvm](https://github.com/nvm-sh/nvm) to install it.
2) Open your terminal and run this command `npm i -g http-server`
3) Once installed open your terminal in the directory of your `index.html` file
4) Run `http-server --cors`. The *cors* option allows *Cross Origin Resource Sharing*. Open your website at your localhost now and you are all set!

### Further improving your development experience
After installing and running `http-server` if you wish for a hot reload function there exists an elegant solution for that too!

1) Run the following command - `npm i -g nodemon`
2) Now once this is installed run this command - ```nodemon `which http-server` --cors -e html,js,css```. This would would hot reload the http-server anytime it detects changes in an `.html`,`.js` or a `.css` file.

**Caveat** - Only the server hot-reloads you will still have to reload the localhost to see the changes.

You are all set to develop this website!

## Current team of developers -

|Anjan Nair|Gaurav Konde|
|---|---|
|<img width=100 height=100 style="border-radius:50%" src="https://avatars.githubusercontent.com/u/22571613?v=4" />|<img width=100 height=100 style="border-radius:50%" src="https://avatars.githubusercontent.com/u/63660013?v=4"/>|

### A special thanks to all the developers who have and are working on the website!

<a href="https://github.com/rajvaya/TEDxACE/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=TEDxACE/Tedxace-website" />
</a>
