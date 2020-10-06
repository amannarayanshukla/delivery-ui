const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

export async function search(payload) {
  const { text, page, limit } = payload;

  return fetch(
    `http://localhost:3000/api/v1/search/${text}?page=${page}&limit=${limit}`,
    requestOptions,
  ).then((response) => response.text());
}
