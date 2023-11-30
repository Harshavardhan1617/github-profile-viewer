const form = document.querySelector('form')
const button = document.querySelector('#submit')
const userName = document.querySelector('#username')
const userInfo = document.querySelector('#userinfo')
const displayName = document.createElement('LI')
const avatar = document.querySelector('#avatar')
const bio = document.createElement('LI')


form.addEventListener('submit', (e) => {
    e.preventDefault()
})

button.addEventListener('click', () => {
    console.log(userName.value)
    gitResponse(userName.value)
})

const gitResponse = async(user) => {
    const data = await fetch(`https://api.github.com/users/${user}`)
    const loadedData = await data.json()
    console.log(loadedData.name)
    displayName.innerText = loadedData.name
    userInfo.append(displayName)
    avatar.src = loadedData.avatar_url
    userInfo.append(avatar)
    bio.innerText = loadedData.bio
    userInfo.append(bio)

}


