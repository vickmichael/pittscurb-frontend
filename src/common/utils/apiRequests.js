
export function baseRequest(url, options = {}) {
  return fetch(
    url,
    options
  ).then((response) => {
    const contentType = response.headers.get('content-type');
    const { status, statusText } = response;

    if (contentType.includes('application/json')) {
      return response.json().then((json) => {
        if (response.ok) {
          return json;
        }

        throw new Error({
          message: json,
          status,
          statusText,
        });
      });
    }

    if (contentType.includes('text/html')) {
      return response.text().then((text) => {
        if (response.ok) {
          return text;
        }

        throw new Error({
          message: text,
          status,
          statusText,
        });
      });
    }

    throw new Error({
      status,
      statusText
    });

  }).catch((error) => error);
}
