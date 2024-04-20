"use client"
import React, { useState } from 'react'
import { render } from 'react-dom'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler =(e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {title, desc}]);
    settitle("")
    setdesc("")
    console.log(mainTask)
  }
  let renderTask = <h3>No Task Available</h3>

  const deleteHandler = (i) => {
    let copyTask =[...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

  if (mainTask.length>0) {
    renderTask = mainTask.map((t, i)=>{
      return (
        <li key={i} className='flex item-centre p-2 justify-between'>
          <div className='p-3 font-semibold flex justify-between w-1/2'>
            <h5>{t.title}</h5>
            <h6>{t.desc}</h6>
          </div>
          <button onClick={()=>{deleteHandler(i)}} className='bg-red-400 text-white p-3 rounded' >Delete</button>
        </li>
      )
    })
  }

  return (
<>
<h1 className='bg-black text-white p-5 text-3xl font-bold text-center'>My ToDo List</h1>
<form onSubmit={submitHandler}>
  <input value={title} onChange={(e)=>{settitle(e.target.value)}} type="text" className='p-3 m-5 border-zinc-800 border-2' placeholder='Enter the task'/>
  <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className='p-3 m-5 border-zinc-800 border-2' placeholder='Enter the description'/>
  <button className='bg-black text-white p-3 rounded'>Add Task</button>
</form>
<hr />
<div className='p-10 bg-slate-200'>
    <ul>{renderTask}</ul>
</div>
</>
  )
}

export default page