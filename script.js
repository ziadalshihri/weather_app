let searchBtn = document.getElementById("btn");
let input = document.getElementById("input");
let result = document.getElementById("div");
const apiKey = "028ad61ccb0949b9b76124455242504";

searchBtn.addEventListener("click", async () => {
    result.innerText = "";
    let q = input.value;
    await prep(q);
});

async function prep(q) {
    let url = "https://api.weatherapi.com/v1/forecast.json?key="+apiKey+"&q="+q;
    let response = await fetch(url);
    let respOBJ = await response.json();

    let p = document.createElement("p");
    p.textContent = respOBJ.current.condition.text;
    result.appendChild(p);
    let img=document.createElement("img")
    img.src=respOBJ.current.condition.icon
    result.appendChild(img)
    let temp = document.createElement("p");
    temp.textContent = "the current tempreture in celcius is "+respOBJ.current.temp_c;
    result.appendChild(temp);
}