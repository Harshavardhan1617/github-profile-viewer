const domObjects = ["form", "submit", "username", "userInfo", "avatar", "bio", "repoLink", "location", "twitterHandle"]

const arrMap = domObjects.map((dom) => {
    return document.querySelector(`#${dom}`)
})

arrMap[0].addEventListener('submit', (e) => {
    e.preventDefault()
    const userName = arrMap[2].value
    gitRequestUser(userName)
})



const gitRequestUser = async(usr) => {
    try {
        const res = await fetch(`https://api.github.com/users/${usr}`)
        const data = await res.json()
        // console.log(data)
        const dp = createGeneric("img", data.avatar_url)
        arrMap[4].append(dp)
    } catch (error) {
        console.log(error)
    }
 


} 

const testFunction = (str) => {
    console.log(str)
}

let element = ""
const createGeneric = (ele, text, link) => {
    if (ele.toUpperCase() === "IMG"){
        element = document.createElement('IMG')
        element.src = text
        return element
    }
    if (ele.toUpperCase() === "A"){
        element = document.createElement('A')
        element.innerText = text
        element.href = link
        // console.log(element)
    }
    else{
        element = document.createElement(`${ele}`)
        element.innerText = text
        // console.log(element)
    }
    
    
}



