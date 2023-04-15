import { CommentSection } from "./Components/Comments.js"
import { fetchJSON } from "./Functions/api.js"

let spinner = document.querySelector('#spinner')
const url = spinner.getAttribute('data-endpoint')
let fetchPage = 1

const spinnerObserver = new IntersectionObserver((entries) => {
    for (let entry of entries) {
        if (entry.isIntersecting) {
            console.log(entry.target)
            loadContent()
        }
    }
}, {
    threshold : 1.0
})


async function loadContent() {
    console.log( url + `${fetchPage}`)
    fetchPage++

    try {
        const comments = await fetchJSON(url + `${fetchPage}`)
        let list = new CommentSection(comments)
        list.appendTo()


    } catch {
        alert("Erreur lors du chargement des commentaires")
        spinnerObserver.disconnect(spinner)
    }

    
}

window.addEventListener('DOMContentLoaded', () => {
    spinnerObserver.observe(spinner)
})

// https://jsonplaceholder.typicode.com/comments?_limit=10?&_page=2

