const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

// export async function shopInformation(payload) {
export async function shopInformation() {
  // const {shopId, productId} = payload;

  // return fetch(`http://localhost:3000/api/v1/shops/${shopId}/product/${productId}`, requestOptions)
  return fetch(
    `http://localhost:3000/api/v1/shops/5e919a88ebf69f78769b41d8/product/5f032a62dfb08403834e173d`,
    requestOptions,
  ).then((response) => response.text());
}
