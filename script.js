const url = 'https://cors-anywhere.herokuapp.com/https://knizhnik.org/garri-garrison/krest-i-korol/22'
fetch(url, {method: 'GET'}).then((res) => 
console.log(res))


const read = document.querySelector('.read')
const ps = read.querySelectorAll('p')
const text = Array.from(ps).map(i=>i.textContent).join('\n')
/* Array.from(ps).forEach(i => {
    console.log(i.parentNode)
    nodeName: "H2"
}) */
