// GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke')
const jokesBTN = document.querySelector('#jokeBtn')

const generateJokes = async () =>{

    /**using promises*/
    try{
        const setHeader = {
            headers : {
                Accept : "application/json"
            }
        }
    
        const res = await fetch("https://icanhazdadjoke.com",setHeader)
        const data = await res.json()
        jokes.innerHTML = data.joke
    }
    catch(err){
       console.log(`the error is ${err}`);
    }


}


jokesBTN.addEventListener('click',generateJokes)
generateJokes();