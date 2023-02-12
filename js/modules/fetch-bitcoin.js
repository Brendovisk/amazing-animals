export default async function fetchBitcoin(url, target) {
  try {
    const btcResponse = await fetch(url);
    const btcValues = await btcResponse.json();
    const donateRealValue = 100;
    const btcBRLDonate = (donateRealValue / btcValues.BRL.buy).toFixed(5);
    const btcPreco = document.querySelector(target);

    btcPreco.innerText = btcBRLDonate;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
