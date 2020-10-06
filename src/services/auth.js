const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow',
};

export async function login(payload) {
  requestOptions.body = JSON.stringify(payload.userCredentials);

  return fetch(`http://localhost:3000/api/v1/auth/login`, requestOptions).then((response) => {
    return response.text();
  });
}
