# netlify-lambda-product-proxy

The `from-root` branch shows the issue with trying to proxy the root and use the path 

You can make it work, but you will have to make sure all static assets are listed in the redirects, so you don't proxy rewrite the path to the function instead.
