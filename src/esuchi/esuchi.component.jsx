import React from 'react';
import TodoPanel from './../component/todo-panel/todoPanel.component';
import DonePanel from './../component/done-panel/donePanel.component';

class ESuchi extends React.Component{
    
    constructor(){
        super()
        this.state = {
            items : [
                {id: 1, title: "Buy groceries", done: false},
                {id: 2, title: "Laundary", done: true},
                {id: 3, title: "Cooking", done: false}
            ]
        }
    }

    render() {
        return (
            <div>
                <h1> E- Suchi </h1>
                <TodoPanel key="todo" items={this.state.items.filter(item=>item.done)}/>
                <DonePanel key="done" items={this.state.items.filter(item=>!item.done)}/>
            </div>       
         
        )
    }
}

export default ESuchi;