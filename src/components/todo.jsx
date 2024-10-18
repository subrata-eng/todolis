import React, { useState } from "react";
import './todo.css';  






const Todo= ()=> {

   const [initial, setInitial]=useState();
   const [data,setData]=useState([]);

    const getinput=(Event)=> {

        console.log(Event.target.value);
        setInitial(Event.target.value);
    };
    
    const getData=()=>{
        console.log(initial);
        let store = [...data, initial];
        setData(store);
        setInitial("");
    }
const deleteTask = (index)=>{
           console.log(index);
           let filterData = data.filter((curElem, id) =>{
            return id != index;
           });
           setData(filterData);
}
console.log(data);

return ( 
    <>
            <div className="container">
                
                <div className="inputTask">

                    <input type="text" placeholder="Enter your task" value={initial
                        
                    } onChange={getinput} />
                    <button onClick={getData}>Add</button>

                </div>
                {data.map((curVal, index)=>{
                    return(
                        <>
                       <div className="taskData">
                        <p>{curVal}</p>
                        <button id="deleteIcon" onClick={()=>deleteTask(index)}>Remove</button>
                       </div>
                        
                        </>
                    )
                })}
                
                </div>    
    
    </>




);
};           

export default Todo;



