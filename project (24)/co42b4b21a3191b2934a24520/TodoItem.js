
import React from "react"

function TodoItem() {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>Placeholder text here</p>
        </div>
    )
}

export default TodoItem


/////////
import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed}/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem

///////challenge
/**
 * Challenge: Style the completed todo items differently from the incomplete items.
 */

 import React from "react"

 function TodoItem(props) {
     const completedStyle = {
         fontStyle: "italic",
         color: "#cdcdcd",
         textDecoration: "line-through"
     }
     
     return (
         <div className="todo-item">
             <input 
                 type="checkbox" 
                 checked={props.item.completed} 
                 onChange={() => props.handleChange(props.item.id)}
             />
             <p style={props.item.completed ? completedStyle: null}>{props.item.text}</p>
         </div>
     )
 }
 
 export default TodoItem