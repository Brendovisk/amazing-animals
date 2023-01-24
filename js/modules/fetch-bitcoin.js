export default function initFecthBitcoin() {
  fetch("https://www.blockchain.com/ticker")
  .then((response) => response.json())
  .then(bitcoin => {
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerText = (100 / bitcoin.BRL.buy).toFixed(5);
  }).catch((error) => {
    console.log(Error(error));
  })
}

initFecthBitcoin();
