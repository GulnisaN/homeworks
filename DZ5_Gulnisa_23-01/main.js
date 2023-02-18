/////lesson 5

const input = document.getElementById('input')
const createButton = document.getElementById('create_button')
const todolist = document.getElementById('todo_list')

const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const edit = document.createElement('button')
        const del= document.createElement('button')

        div.setAttribute('class', 'block_text')
        del.setAttribute('class', 'delete_button')
        edit.setAttribute('class', 'edit_button')

        edit.innerHTML = 'edit'
        del.innerHTML = 'delete'
        text.innerHTML = input.value

        div.append(text)
        div.append(edit)
        div.append(del)

        todolist.append(div)


        edit.addEventListener('click' , () => {
            let pr = prompt()
            text.innerHTML=pr
        })
        del.addEventListener('click', () => {
            todolist.removeChild(div)
        })
    }
    input.value = ''

}

createButton.onclick = () => createTodo()
input.addEventListener('keydown', e => (e.keyCode === 13) ? createTodo() : false)
