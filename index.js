
const base_url = "https://pokeapi.co/api/v2/"

let namePokemon = document.getElementById('name-pokemon')
let imagePokemon = document.getElementById('image-pokemon')
let inputPokemon = document.getElementById('input-pokemon')

const getPokemon = async id => {
    try {
        const response = await fetch(`${base_url}pokemon/${id}`)
        const data = await response.json()
        console.log(data)
        namePokemon.textContent = data.name
        imagePokemon.src = data.sprites.front_default
    } catch (e) {
        console.log(e.toString())
    }
}

const searchPokemon = () => {
    getPokemon(inputPokemon.value)
    inputPokemon.value = ""
}

getPokemon(25)