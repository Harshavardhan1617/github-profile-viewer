const domObjects = ["form", "submit", "username", "avatar", "bio", "displayUsername", "userLink", "location", "twitterHandle"]

const arrMap = domObjects.map((dom) => {
    return document.querySelector(`#${dom}`)
})

arrMap[0].addEventListener('submit', (e) => {
    e.preventDefault()
    const userName = arrMap[2].value
    gitRequestUser(userName)
    gitRequestRepos(userName) 
})

const gitRequestUser = async(usr) => {
    try {
        const res = await fetch(`https://api.github.com/users/${usr}`)
        const data = await res.json()
        const displayImg = createGeneric("img", data.avatar_url)
        arrMap[3].append(displayImg)
        arrMap[6].append(createGeneric("a", data.html_url, data.html_url))
        arrMap[4].append(createGeneric("p", data.bio))
        arrMap[5].append(createGeneric("p", data.name))
        arrMap[7].append(createGeneric("p", data.location))
        if(data.twitter_username){
            const twitterHandle = `https://twitter.com/${data.twitter_username}`
            arrMap[8].append(createGeneric("a", `Twitter: ${twitterHandle}`, twitterHandle))
        }
        document.querySelector('.userSection').classList.toggle("none")
    } catch (error) {
        console.log(error)
    }
} 

const gitRequestRepos = async(usr) =>{
    const res = await fetch(`https://api.github.com/users/${usr}/repos`)
    const data = await res.json()
    const repoSection = document.createElement('div')
    repoSection.classList.add("repoSection")
    document.querySelector('#bottom').append(repoSection)
    const repoName = document.createElement("div")
    repoName.id = "repoName"
    const h2 = createGeneric(data[6].name)
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
        return element
    }
    else{
        element = document.createElement(`${ele}`)
        element.innerText = text
        return element
    }
    
    
}

