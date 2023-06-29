export default function loadBalancer(chinaDownload, USDownload) {
  // Promise.race.then receives the value of the first promise that settles.
  return Promise.race([chinaDownload, USDownload])
    .then((response) => response)
    .catch((error) => {
      console.log(error);
    });
}
