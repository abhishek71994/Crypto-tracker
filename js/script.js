var btn = document.getElementById('bt');
var space = document.getElementById('space');
btn.addEventListener('click',async function(){
	var res = await apiCall('https://api.coinmarketcap.com/v1/ticker/');
	var data = JSON.parse(res);
	setCards(data);
});

function apiCall(url){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET",url,false);
	xmlhttp.send();
    return xmlhttp.responseText;
}
function setCards(data){
	data.forEach(function(res){
		space.insertAdjacentHTML('beforeend', `<div class='card'><div class='title'>${res.name}</div> <hr/> <div class="rank">${res.rank}</div>  <div class="value">$ ${res.price_usd}/ ${res.price_btc} ${res.name}</div></div>`);
	})
}