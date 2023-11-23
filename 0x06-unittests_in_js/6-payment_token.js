function getPaymentTokenFromAPI(success) {
  return new Promise((res, _) => {
    if (success) {
      res({data: 'Successful response from the API'})
    }
  });
}

module.exports = getPaymentTokenFromAPI;
