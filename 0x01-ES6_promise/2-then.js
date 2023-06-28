export default function handleResponseFromAPI(promise) {
  promise.then((resolve) => {
    if (resolve == undefined) {
      return {
        status: 200,
        body: 'success',
      };
    }

    return new Error();
  }).catch(() => {
    console.log('Got a response from the API');
  });
}
