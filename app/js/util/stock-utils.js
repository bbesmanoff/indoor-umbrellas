/**
* Makes a request to the API to retrieve a single stock object.
*
* @param {string} symbol
* @return {Promise}
*/
export function getStockData(symbol) {
  return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `/api/stocks/search?symbol=${symbol}`);
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject({status: xhr.status, error: response.errorText});
        }
      };
      xhr.send();
  });
};
