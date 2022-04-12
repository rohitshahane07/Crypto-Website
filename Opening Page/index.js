


function convertToJSON(response){
  return  response.json();
    
}

function showData(data){
     console.log(data);
     const bitcoin_price_contaner= document.getElementById('bitcoin_price');
     const cardano_price_contaner =document.getElementById('cardano_price');
     const dogecoin_price_contaner =document.getElementById('dogecoin_price');
     const ethereum_price_contaner =document.getElementById('ethereum_price');
     const helium_price_contaner =document.getElementById('helium_price');
     const litecoin_price_contaner =document.getElementById('litecoin_price');
     const polkadot_price_contaner =document.getElementById('polkadot_price');

     bitcoin_price_contaner.innerText =data.bitcoin.inr;
     cardano_price_contaner.innerText=data.cardano.inr;
     dogecoin_price_contaner.innerText=data.dogecoin.inr;
     ethereum_price_contaner .innerText=data.ethereum.inr;
     helium_price_contaner .innerText=data.helium.inr;
     litecoin_price_contaner .innerText=data.litecoin.inr;
     polkadot_price_contaner .innerText=data.polkadot.inr;


     
}

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cpolkadot%2Cdogecoin%2Ctether%2Cbinancecoin%2Chelium%2Ccardano%2Csolana%2Clitecoin%2Cstellar&vs_currencies=inr').then(convertToJSON)
.then(showData)