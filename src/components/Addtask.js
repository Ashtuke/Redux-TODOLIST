import React from 'react'
import { useState, } from 'react'
import { connect } from 'react-redux'
import { addTodos, removetodos,Updatetodos,completetodos } from '../redux/reducer';


const mapStateToProps = ( state)=> {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (Dispatch)=> {
    return {
        addTodos: (obj) => Dispatch(addTodos(obj)),
        removetodos: (id) => Dispatch(removetodos(id)),
        Updatetodos: (obj) => Dispatch(Updatetodos(obj)),
        completetodos: (id) => Dispatch(completetodos(id)),
    }
}

const Addtask = (props) => {

    const [todo,setTodo] = useState("")

   

    const handleChange = (e) =>{
        setTodo(e.target.value)
    };
    console.log("todo text",props);






    return (
        <div className='addtodos'>
     <input type="text" 
     onChange={(e)=> handleChange(e)}
      className='todo-input'/>   

     <button  className='add-btn' 
     onClick={()=> props.addTodos({
         id: Math.floor(Math.random()*1000),
         item: todo,
         completed : false,
     }) }>Add</button>{" "}
     <br/>

     
      
    
        </div>
    );
};

export default connect(mapStateToProps,mapDispatchToProps)(Addtask);