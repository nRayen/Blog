import { cloneTemplate } from "../Functions/dom.js"

export class CommentSection {
    #comments
    #listElement = document.querySelector('.comments-list')
    
    constructor(comments){
        this.#comments = comments
    }

    appendTo() {
        for (let comment of this.#comments){
            let newComment = new CommentItem(comment)
            newComment.appendTo(this.#listElement)
        }
    }
}




export class CommentItem {
    #comment
    #element

    constructor (comment) {
        this.#comment = comment
        this.id = comment.id
        let li = cloneTemplate('comment-template')
        let name = li.querySelector('.author')
        let text = li.querySelector('.text')

        name.innerHTML = comment.name
        text.innerHTML = comment.body
        this.#element = li
    }

    appendTo(element) {
        element.append(this.#element)
    }
}