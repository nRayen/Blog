let scrollItems = document.querySelectorAll('.scroll')

const observer = new IntersectionObserver((entries) => {
    for (let entry of entries){
        if (entry.isIntersecting){
            entry.target.classList.remove('scroll')
            entry.target.classList.add('reveal')
        }
    }
}) 

window.addEventListener('DOMContentLoaded', () => {
    for (let item of scrollItems){
        observer.observe(item)
    }
})
