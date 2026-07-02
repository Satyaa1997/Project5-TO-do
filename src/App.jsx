import React from 'react'
import { useState } from 'react'
import Card from './Component/Card'

const App = () => {

  const [userName, setUserName] = useState('')
  const [userRole, setUserRole] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [detail, setDetail] = useState('')

  const [allUser, setAllUser] = useState([])

const submitHandler = (e)=>{
  e.preventDefault()
 
  const oldUser =[...allUser]
  oldUser.push({userName,userRole,imgUrl,detail})
  console.log(oldUser);
  setAllUser(oldUser)


  setUserName('')
  setUserRole('')
  setImgUrl('')
  setDetail('')
}
const deleteHandler = (idx)=>{
  const copyUser = [...allUser]
  copyUser.splice(idx,1)
  setAllUser(copyUser)
}

  return (
    <div className='h-screen bg-black text-white'>
      <h1>To-Do</h1>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex flex-wrap px-2 py-10'>
        <input value={userName}
        onChange={(e)=>{
         setUserName(e.target.value)
        }}
         className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]' 
         type="text"
          placeholder='Enter your Name' />

        <input value={userRole}
        onChange={(e)=>{
          setUserRole(e.target.value)
        }}
         className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]' 
         type="text"
          placeholder='Enter your Role' />

        <input value={imgUrl}
        onChange={(e)=>{
          setImgUrl(e.target.value)
        }}
         className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]' 
         type="text"
          placeholder='Enter your Image Url' />

        <input value={detail}
        onChange={(e)=>{
          setDetail(e.target.value)
        }}
         className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]' 
         type="text" 
         placeholder='Enter your Description'  />

        <button className=' px-5 py-2 active:scale-95 cursor-pointer rounded m-2 w-[90%] bg-green-700'>Create user</button>
      </form>
      <div  className='flex  gap-5 flex-wrap py-2 px-2 mb-5'>
           {allUser.map((elem,idx)=>{
            return <Card idx={idx} elem={elem} deleteHandler={deleteHandler}/>
           })}
      </div>
    </div>
  )
}

export default App
