const loadData=()=>{
    fetch('https://restcountries.com/v2/all')
.then(res=>res.json())
.then(data=>displayData(data))
}
const display=document.getElementById("countries")
const displayData= countries=>{
    const countryHtml=countries.map(country=> getCountryHtml(country))
    display.innerHTML=countryHtml.join(' ');

}
const getCountryHtml=country=>{
    console.log(country.flags.png)
    // Option-2 Destructuring
    const {name, flag}=country;
    return `
    <div class="country">
        <h5>Name:${name}</h5>
        <img width="240px" src="${flag}"></div>`
}
/* Option-1  */
//     return `
//     <div class="country">
//         <h5>Name:${country.name}</h5>
//         <img width="240px" src="${country.flag}"></div>`
// }
loadData()