const loadSingleUser = () => {
    fetch(`https://randomuser.me/api/`)
        .then(res => res.json())
        .then(data => displaySingleUser(data.results[0]))
}
loadSingleUser()

const displaySingleUser = (user) => {
    console.log(user)
}
// meal db 
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle
}

const searchMeal = () => {
    const searchText = document.getElementById('search-field').value

    // show spinner 
    toggleSpinner('block')
    loadMeals(searchText)
    document.getElementById('search-field').value = ''
}

const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}



const displayMeals = meals => {
    const container = document.getElementById('meals')
    container.textContent = ''
    meals.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div')
        div.innerHTML = `
        <h1>${meal.strMeal} </h1>
        <button onclick="mealDetail('${meal.strMeal}')" > Click Me </button>
`
        container.appendChild(div)
    })
}
loadMeals('fish')

const mealDetail = mealName => {
    console.log(mealName)
}