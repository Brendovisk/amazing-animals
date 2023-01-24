export default function initFecthBitcoin() {
  async function fetchBtc() {
    try {
      const btcResponse = await fetch("https://www.blockchain.com/ticker");
      const btcValues = await btcResponse.json();
      const donateRealValue = 100;
      const btcBRLDonate = (donateRealValue / btcValues.BRL.buy).toFixed(5);
      const btcPreco = document.querySelector(".btc-preco");

      btcPreco.innerText = btcBRLDonate;
    } catch (error) {
      console.log(error);
    }
  }

  fetchBtc();
}

initFecthBitcoin();
