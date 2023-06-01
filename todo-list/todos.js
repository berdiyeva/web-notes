let input = prompt('What would you like to do?')
const  todos = ['Read work emails', 'Draft new website homepage', 'Schedule a meeting']
while (input.toLocaleLowerCase() !== "quit" && input.toLocaleLowerCase() !== 'q') {
    if (input === 'list') {
        console.log('***')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('***')
    } else if (input === 'new') {
        const newTodo = prompt('What is the new todo?')
        todos.push(newTodo)
        console.log(`${newTodo} was added to the list.`)
    } else if (input === 'delete') {
        const index =parseInt(prompt('Enter the index to delete:'))
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1)
            console.log(`${deleted[0]} was removed from todo list.`)
        } else {
            console.log('Unknown index')
        }
    }
    input = prompt('What would you like to do?')
}
console.log('QUITING THE TODO APP!')