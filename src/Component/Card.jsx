import React from 'react'

const Card = (props) => {
  return (
    <div  className=' lg:w-[23vw] md:[40vw] sm:[30vw] rounded-xl py-8 px-8 text-center flex flex-col items-center bg-white text-black'>
           <img className='h-20 w-20 rounded-full object-cover object-center' src={props.elem.imgUrl} alt="" />
           <h1 className='h-2xl mt-2 font-bold'>{props.elem.userName}</h1>
           <h5 className='text-lg text-blue-500 font-semibold my-2 '>{props.elem.userRole}</h5>
           <p className='text-sm font-medium leading-tight'>{props.elem.detail}</p>
           <button onClick={()=>{
           props.deleteHandler(props.idx)
           }} className='px-2 py-2 text-xs cursor-pointer active:scale-95 rounded bg-red-600 text-white font-semibold mt-3'>Remove</button>
          </div>
  )
}

export default Card
