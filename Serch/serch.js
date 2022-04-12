function convertTojson(response) {
    return response.json();
}

function showData(data) {
    //  console.log(data.coins);
    


     const tbody_elem = document.getElementById("serch_result")

    for (let i = 0; i < data.coins.length; i = i + 1) {
        const singal_data = data.coins[i];
      
        const new_row = document.createElement('tr');

        const new_s_no = document.createElement('td');
        const logo = document.createElement('td');
        const name = document.createElement('td');
        const link = document.createElement('td');

        const new_img = document.createElement('img');


        new_s_no.innerText = i;

        new_img.src = singal_data.thumb;
        logo.appendChild(new_img);

        name.innerText = singal_data.name + '(' + singal_data.symbol + ")";

        link.innerText = "todo"

        new_row.appendChild(new_s_no);
        new_row.appendChild(logo);
        new_row.appendChild(name);
        new_row.appendChild(link);
        
        tbody_elem.appendChild(new_row);

        // console.log(singal_data);
    }
}



fetch('https://api.coingecko.com/api/v3/search?query=bitcoin').then(convertTojson)
    .then(showData)
