import React from 'react'

export default function DragAndDrop() {

  function handleDragStart (e) {
    e.dataTransfer.setData("Text", e.target.id);
  }

  function handleDropAllowance (e) {
    e.preventDefault();
  }

  function handleDrop (e) {
    let data = e.dataTransfer.getData("Text")

  }

  //dragging is fine but after that we gotta use state. We'll have two states, list1 and list 2

  return (
    <div className='px-10'>
      <div>list 1:</div>
      <ul className='list-disc'>
        <li draggable="true">l1i1</li>
        <li draggable="true">l1i2</li>
        <li draggable="true">l1i3</li>
        <li draggable="true">l1i4</li>
        <li draggable="true">l1i5</li>
      </ul>
      <div>list 2:</div>
      <ul className='list-disc'>
        <li draggable="true">l2i1</li>
        <li draggable="true">l2i2</li>
        <li draggable="true">l2i3</li>
        <li draggable="true">l2i4</li>
        <li draggable="true">l2i5</li>
      </ul>
    </div>
  )
}
