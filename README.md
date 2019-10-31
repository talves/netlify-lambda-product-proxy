# netlify-lambda-product-proxy

The `master` branch shows a proxy rewrite to the `/product/product-id/more` path and extract the product id.


The `from-root` branch shows the issue with trying to proxy the root and use the path 

You can make it work from root, but you will have to make sure all static assets are listed in the redirects, so you don't proxy rewrite the path to the function instead causing the attempt to get the asset name as a product id.
