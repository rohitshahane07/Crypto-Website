

function convert_to_json(response) {
    return response.json()
}

function showInfo(data) {
    const coin_img = document.getElementById('coin_img');
    const coin_name = document.getElementById('coin_name');
    const coin_description = document.getElementById('coin_description');

    coin_img.src = data.image.small;
    coin_name.innerText = data.name
    coin_description.innerHTML = data.description.en;
    // console.log(data)
}

function showPrice(showPrice) {
    const inr_price = document.getElementById('inr_price');
    const usd_price = document.getElementById('usd_price');
    const eur_price = document.getElementById('eur_price');
    // console.log(showPrice)

    inr_price.innerText = showPrice.bitcoin.inr;
    usd_price.innerText = showPrice.bitcoin.usd;
    eur_price.innerText = showPrice.bitcoin.eur;

}

function showHistory(data) {
    // console.log(data)
    showGraph(data);
}



fetch('https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=true').then(convert_to_json)
    .then(showInfo)
// .then(showData)


fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd%2Ceur')
    .then(convert_to_json)
    .then(showPrice);

fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=14&interval=daily')
    .then(convert_to_json)
    .then(showHistory)

    function convertUnitToReadabal(timestamp) {

        const date = new Date(timestamp);
    
        const date_string = date.getDate();
        const  month_string = "0" + date.getMonth();
    
        const readable = date_string + '-' + month_string;
        return readable
    }
    





function showGraph(history_data) {
    // console.log(history_data.prices);

    let label = [];
    let price = [];

    for (let i = 0; i < history_data.prices.length; i = i + 1) {

        singal_price = history_data.prices[i];

        // sepreate the label and price
        const readable_label = convertUnitToReadabal(singal_price[0]);
        label.push(readable_label);
        price.push(singal_price[1]);
    }
    console.log(label);
    console.log(price);

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: label,
            datasets: [{
                label: 'Price in (INR)',
                data: price,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    // grid:{
                    //     display:false,
                    // }
                },
                // x:{
                //     grid :{
                //         display:false
                //     }
                // }
                
            }
        }
    })
}
