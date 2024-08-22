function convertUrlEndpoint(network, address, apiKeyIndex) {
  const networkUrl = END_POINT_BY_CHAIN[network].url;
  const networkAPIKey = END_POINT_BY_CHAIN[network].keys[apiKeyIndex];
  return `${networkUrl}&address=${address}&apikey=${networkAPIKey}`;
}

function convertBalance(result) {
  return result / Math.pow(10, 18);
}

function getCorrectWalletList(walletArray) {
  const correctWallets = [];
  let count = 0;
  walletArray.forEach((element, i) => {
    if (element.length === 42 && element.startsWith("0x") && count < 50) {
      count += 1;
      correctWallets.push(element);
    }
  });

  return correctWallets;
}
