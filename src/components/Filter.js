// import { iteratorSymbol } from '@reduxjs/toolkit/node_modules/immer/dist/internal';
import React from 'react'
import { connect } from 'react-redux'
import { addTodos, removetodos,Updatetodos,completetodos } from '../redux/reducer';
import Todoitem from './TodoList';
import { useState } from 'react';


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

const Filter = (props) => {
    const [sort,setSort] = useState("active")
    return (
         <div className='displaytodo'>
            <div className='buttons'>
                <buttons onClick={()=>setSort("active")}>Active</buttons>
                <buttons onClick={()=>setSort("Completed")}>Completed</buttons>
                <buttons onClick={()=>setSort("All")}>All</buttons>

            </div>
            <ul>
                {
                    props.todos.length > 0 && sort === "active" ?

                    props.todos.map(item => {
                        return(
                            item.completed === false &&
                            <Todoitem
                            Key={item.id}
                            item={item}
                            removetodos={props.removetodos}
                            updatetodos={props.Updatetodos}
                            completetodos={props.completetodos}

                            />
                        )

                    }) 
                  : null } 

                  {/* Completed Tasks */}

                  {
                    props.todos.length > 0 && sort === "Completed" ?

                    props.todos.map(item => {
                        return(
                            item.completed === true && 
                            <Todoitem
                            Key={item.id}
                            item={item}
                            removetodos={props.removetodos}
                            updatetodos={props.Updatetodos}
                            completetodos={props.completetodos}

                            />
                        )

                   })
                
                  : null } 

                  {/* for All filter */}

                  {
                    props.todos.length > 0 && sort === "all" ?

                    props.todos.map(item => {
                        return(
                            <Todoitem
                            Key={item.id}
                            item={item}
                            removetodos={props.removetodos}
                            updatetodos={props.Updatetodos}
                            completetodos={props.completetodos}

                            />
                        )

                    }) 
                  : null } 

            </ul>
        </div>
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(Filter);
