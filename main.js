let joke=document.querySelector('p')
let button=document.querySelector('button')

window.addEventListener('load',getjokes)
button.addEventListener('click',getjokes)


async function getjokes(){
    const res=await fetch('https://icanhazdadjoke.com/',{
        headers: {
            'Accept': 'application/json'
        }
    })
    const data=await res.json()
    console.log(data.joke)
    joke.innerHTML='" '+data.joke+' "'
}
