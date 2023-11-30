const form = document.querySelector('form')
const button = document.querySelector('#submit')
const userName = document.querySelector('#username')

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

button.addEventListener('click', () => {
    console.log(userName.value)
    gitResponse(userName.value)
})

const gitResponse = async(user) => {
    const data = await fetch(`https://api.github.com/users/${user}`)
    console.log("user name is ", data.name )
}


