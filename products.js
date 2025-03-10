
const menuOptions = [ // my product: name, price, vegan, src
     { name: "X-Salada", price: 30, vegan: false, src: "./img/xsalada.jpeg" },
     { name: "X-Bacon", price: 34, vegan: false, src: "./img/xbacon.png" },
     { name: "X-Bacon Egg", price: 39, vegan: false, src: "./img/bacon-egg.png" },
     { name: "Monstruoso", price: 50, vegan: false, src: "./img/monstruoso.png" },
     { name: "Big Vegano", price: 55, vegan: true, src: "./img/xvegan.png" },
     { name: "X-Vegan", price: 45, vegan: true, src: "./img/monstruoso-vegan.png" },
];

const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')  // botão que clicando aparece as imagens e valores na tela
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')

function formatCurrency(value) {
     const newValue = value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
     })
     return newValue
}


function showAll(productsArray) { // função que mostra os valores e imagens na tela
     let myLi = '' // limpa a lista, quando clicamos em um botão, automaticamente ela limpa o local para aparecer outra funçaõ
     productsArray.forEach((product) => {
          myLi += `
          
               <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="intem-price">R$ ${formatCurrency(product.price)}</p>
               </li>
               `

     })
     list.innerHTML = myLi
}
function mapAllItems() {
     const newPrices = menuOptions.map((product) => ({
          ...product, //Spread Operator ele economiza codigo e só modifica o valores que colocarmos depois dele!
          price: product.price * 0.9, // Aplica 10% de desconto

     }));
     showAll(newPrices)

}
function sumAllItems() {
     const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0) // Somar Tudo: aqui entra o acc que é o acumulador e o segundo currennt que é o valor total
     list.innerHTML = `
     
     <li>
          <p> o valor total dos items é R$ ${formatCurrency(totalValue)}</p>
     </li>
     `

}
function filterAllItems() { // função paa aparacerem apenas os produtos veganos
     const filterJustVegan = menuOptions.filter((product) => product.vegan)
     showAll(filterJustVegan)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions)) // () => esta funÇão faz com que a imagem só apareça quando for chamada
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems) // evento que quando clicamos no botão somaAll ele chama a função mapAllItems
filterAll.addEventListener('click', filterAllItems) // evento que quando clicamos no botão filterAll ele chama a função


