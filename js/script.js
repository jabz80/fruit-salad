const fruitForm = document.querySelector("#inputSection form")
const fruitList = document.querySelector('#fruitSection ul')

const addFruit = fruit => {
    // create a li element
    const li = document.createElement("li")
    // li content will be whatever is passed to fruit parameter
    li.textContent = fruit
    // add li to ul with id of fruit list
    fruitList.appendChild(li)
    // listen for a click event on li elements and remove
    li.addEventListener("click", () => {
        fruitList.removeChild(li)
    })
}

fruitForm.addEventListener("submit", e => {
    // prevents page from refreshing
    e.preventDefault()
    // add fruit function is passed the value of input as parameter.
    addFruit(e.target.fruitInput.value)
    // clears the value from input box once clicked.
    e.target.fruitInput.value = ""
})
console.log(fruitForm)
