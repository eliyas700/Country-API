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

/* loadSpecificCountry */
    const countryName=document.getElementById('country-name')
const loadSpecificCountry=()=>{
    const country =countryName.value;
    const url=`https://restcountries.com/v3.1/name/${country}`
    fetch(url)
    .then(res =>res.json())
    .then(data=>displayCountry(data))
    countryName.value='';
}
const searchedCountry=document.getElementById('single-country')
const displayCountry=country=>{
    searchedCountry.textContent=''
    const singleCountry= country[0]
    console.log(singleCountry)
    console.log(country[0].name.common)
    const {name,nativeName,population,region,capital,area,flags}=country[0];
    const div = document.createElement('div')
    div.classList.add='country-detail'
    div.innerHTML=`
        <h4>Name:${name.common}</h4>
        <p>Native Name:${name.official}</p>
        <p>Population:${population}</p>
        <small> Region:${region} Capital: ${capital}, Area:${area}</small>
        <img width="240px" src="${flags.svg}">
    `
    searchedCountry.appendChild(div)
}
loadData()