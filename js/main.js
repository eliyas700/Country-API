const loadData=()=>{
    fetch('https://restcountries.com/v2/all')
.then(res=>res.json())
.then(data=>displayData(data))
}
const display=document.getElementById("countries")
const displayData= countries=>{
    console.log(countries[0])
    const countryHtml=countries.map(country=> getCountryHtml(country))
    display.innerHTML=countryHtml.join(' ');

}
/* Option-1  */
// const getCountryHtml=country=>{
//     return `
//     <div class="country">
//         <h5>Name:${country.name}</h5>
//         <img width="240px" src="${country.flag}"></div>`
// }
// Option-2 Destructuring
// const getCountryHtml=country=>{
//     console.log(country.flags.png)
    
//     const {name, flag}=country;
//     return `
//     <div class="country">
//         <h5>Name:${name}</h5>
//         <img width="240px" src="${flag}"></div>`
// }

/* Option-3 Destructuring Inside the Function Parameter */
const getCountryHtml=({name, flag,capital,area,region})=>{
    return `
    <div class="country">
        <h5>Name:${name}</h5>
        <p>Capital:${capital}</p>
        <p>Area:${area}</p>
        <small>Continent:${region}</small>
        <img width="240px" src="${flag}"></div>`
}

loadData()