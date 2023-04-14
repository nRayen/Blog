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
})


function loadContent() {
    console.log( url + `${fetchPage}`)
    fetchPage++
}

window.addEventListener('DOMContentLoaded', () => {
    spinnerObserver.observe(spinner)
})

// https://jsonplaceholder.typicode.com/comments?_limit=10?&_page=2
