import React from 'react'
import { useRef } from 'react';

const Todoitem = (props) => {
    const {item, updatetodos , removetodos, completetodos}= props;

    const inputRef = useRef(true);

    const changeFocus = ( ) => {
        inputRef.current.disabled = false;
        inputRef.current.focus();

    };

    const update = (id,value,e) => {
        if(e.which === 13){
            updatetodos({id, item:value });
            inputRef.current.disabled = true;
        }
    };
    return (
        <li key={item.id}>
                    <textarea 
                    ref={inputRef} 
                    disabled={inputRef}
                    defaultValue={item.item}
                    onKeyPress={(e)=> update(item.id, inputRef.current.value, e)}
                     />
                <div className='btns'>
                <button onClick={()=>changeFocus()}>Edit</button>
                <button onClick={()=>completetodos(item.id)}>Complete</button>
                <button onClick={()=>removetodos(item.id)}>Delete</button>{" "}
                 </div>
                 {item.completed && <span className='completed'> <h2>done</h2></span>}
                </li>
    )
}

export default Todoitem
