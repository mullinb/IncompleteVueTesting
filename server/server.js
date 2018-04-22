const fs = require('fs');
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');

const atmBehavior = require('./models/atm')

const bundleRenderer = createBundleRenderer(
  require('../dist/vue-ssr-bundle.json'),
  {
    template: fs.readFileSync('./index.html', 'utf-8')
  }
);

const app = express();

app.use('/dist', express.static('dist'));

app.get('*', (req, res) => {
  bundleRenderer
    // Renders directly to the response stream.
    // The argument is passed as "context" to main.server.js in the SSR bundle.
    .renderToStream({url: req.path})
    .pipe(res);
});

console.log(atmBehavior("-111111111111111111111111111111111111111180"));


app.listen(8080, console.log("server runs"));
