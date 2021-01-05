import React from 'react';

function TodoItem(props) {
    console.log('Props är ', props);
    let todoDone = 'Ej klar';

    if (props.done === true) {
        todoDone = 'Klar'
    }

    return (
        <li className="todo-item">{ props.text.todo } - { todoDone }</li>
    )
}

export default TodoItem;