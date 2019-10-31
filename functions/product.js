exports.handler = async function(event, context, callback) {
  // path will come in as `/<some-product-id>/<rest>
  const pathArr = event.path.split("/");
  const productId = pathArr[1];
  console.log(`Product id is ${productId}`);

  const body = productId
    ? `<h1>Product id = ${productId}</h1>`
    : "Missing product!";
  callback(null, {
    statusCode: 200,
    body: `${body}`
  });
};
