const fruitForm = document.querySelector("#inputSection form")
const fruitList = document.querySelector('#fruitSection ul')
const fruitNutrition = document.querySelector("#nutritionSection p")

const fetchFruitData = fruit => {
    fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`)
    .then((response) => response.json())
    .then(data =>  {
        console.log(data)
        addFruit(data)
    })
    .catch(err => console.error(err))
}
let totalCal = 0
let totalCarbs = 0
let protein = 0
let fat = 0
let sugar = 0

const addFruit = fruit => {
    // create a li element
    const li = document.createElement("li")
    // li content will be whatever is passed to fruit parameter
    li.textContent = fruit.name
    // add li to ul with id of fruit list
    fruitList.appendChild(li)
    // listen for a click event on li elements and remove
    li.addEventListener("click", () => {
        fruitList.removeChild(li)
    })
    totalCal += fruit.nutritions.calories
    totalCarbs += fruit.nutritions.carbohydrates
    protein += fruit.nutritions.protein
    fat += fruit.nutritions.fat
    sugar += fruit.nutritions.sugar

    fruitNutrition.textContent = 
    `
    Total Calories: ${totalCal}
    Total Carbohydrates: ${totalCarbs}
    Protein: ${protein} 
    Fat: ${fat.toFixed(2)} 
    Sugar: ${sugar}
    `

}

fruitForm.addEventListener("submit", e => {
    // prevents page from refreshing
    e.preventDefault()
    // add fruit function is passed the value of input as parameter.
    fetchFruitData(e.target.fruitInput.value)
    // clears the value from input box once clicked.
    e.target.fruitInput.value = ""
})
console.log(fruitForm)
