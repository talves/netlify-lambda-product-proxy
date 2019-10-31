exports.handler = async function(event, context, callback) {
  // path will come in as `/product/<some-product-id>/<rest>
  const pathArr = event.path.split("/");
  const productId = pathArr[2] || "invalid-product";
  console.log(`Product id is ${productId}`);
  const message = `<h1>Product id = ${productId}!</h1>`;
  callback(null, {
    statusCode: 200,
    body: `${message}`
  });
};
