import * as React from 'react';
import {useState} from 'react';
import './calendermain.scss';

const Model = ({handleClose,monthdat,cyear,dates}: any) => {

  const[toDos,setTodos]=useState([])
const[toDo,setTodo]=useState('')
 
var dae=toDo
const datea= localStorage.getItem('event');

var datee=dates+monthdat+cyear
localStorage.setItem(datee,dae);


  return (
    
    <div className="model">
       <article className="card">
      <div> <h1 className="heading"><b>Add Event To  {monthdat} {datea}&nbsp;{cyear}</b></h1><button className="x1" onClick={handleClose}>X</ button> </div>
      
      <div className="borderaddevent">
      {toDos.map((value)=>{
        return (<div><br></br><div className="data_eve_list">
        <span className="mdj"> {monthdat}{datea}</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="event_add">{value}</span> 
  
  
          </div><br></br></div> )
  })}
      </div>
    
  <form>
      <input value={toDo} onChange={(e)=>setTodo(e.target.value)}  type="text" className="addtext" placeholder="🖊️ Bithday,Holyday,etc..." />
      </form>
    <button className="addcard" onClick={()=>setTodos([...toDos,toDo])}  type="submit">ADD</button> 
    </article>
    </div>

  );
};
export {Model};