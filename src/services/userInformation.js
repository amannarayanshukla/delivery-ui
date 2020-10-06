const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

export async function getUserInformation(accessToken, uuid) {
  const raw = JSON.stringify(accessToken, uuid);
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  return fetch('http://localhost:3000/api/v1/user/profile', requestOptions).then((response) =>
    response.text(),
  );
}
