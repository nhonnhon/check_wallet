function convertUrlEndpoint(network, address, apiKeyIndex) {
  const networkUrl = END_POINT_BY_CHAIN[network].url;
  const networkAPIKey = END_POINT_BY_CHAIN[network].keys[apiKeyIndex];
  return `${networkUrl}&address=${address}&apikey=${networkAPIKey}`;
}

const convertBalance = (result) => {
  return result / Math.pow(10, 18);
};
