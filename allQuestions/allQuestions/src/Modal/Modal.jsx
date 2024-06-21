import React, { useState, memo } from 'react'

export default function Modal() {

  const [isModalActive, setIsModalActive] = useState(false);

  function toggleModal() {
    setIsModalActive(!isModalActive);
  }

  return (
    <div className='w-full h-full'>
      <ModalButton toggleModal={toggleModal} />

      {
        isModalActive ? <ModalContent toggleModal={toggleModal}/> : null
      }

    </div>
  )
}

const ModalButton = memo(({toggleModal}) => {

  return <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded" onClick={toggleModal}>Click me to open a modal!</button>
})

function ModalContent ({toggleModal}) {

  return <div className='fixed inset-0 z-10 overflow-y-auto w-screen bg-opacity-25'>
    <div className='flex justify-center items-center w-full h-full bg-gray-50 bg-opacity-40' onClick={toggleModal}>
      <div className='flex flex-col w-1/4 h-1/4 text-white border border-blue-700 bg-blue-400 rounded-lg'>
        <div className='flex w-full justify-end px-2 ' onClick={toggleModal}>
          <h1 className='rounded-md hover:bg-blue-800 hover:cursor-pointer p-2 m-1'>X</h1>
        </div>
        
        <div className='flex w-full h-auto justify-center items-center overflow-y-scroll px-2 py-3'>
        Hi, I'm the modal!
        sgsddddddddd
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error ut, iste, nam numquam sequi enim perspiciatis possimus quo impedit doloremque id autem? Temporibus optio doloremque at. Pariatur nulla ipsa laudantium.
        </div>
        
      </div>
    </div>
  </div>
}
