import React, { useRef, useState } from 'react'
import { firstList, secondList } from './listData';

export default function DragAndDrop() {

  const [list1, setList1] = useState(firstList);
  const [list2, setList2] = useState(secondList);
  const dragRef = useRef(null);

  function handleDragStart(e) {
    dragRef.current = e.target.id;
  }

  function handleDropIntoList1(e) {
    setList2(list2.filter(listItem => listItem !== dragRef.current));
    setList1([...list1, dragRef.current]);
  }

  function handleDropIntoList2(e) {
    setList1(list1.filter(listItem => listItem !== dragRef.current));
    setList2([...list2, dragRef.current]);
  }

  //dragging is fine but after that we gotta use state. We'll have two states, list1 and list 2

  return (
    <div className='px-10'>
      <div>list 1:</div>
      <ul className='list-disc' id='list1'>
        {
          list1.map((list1Item) => {
            return <li 
            draggable="true" 
            key={list1Item} 
            id={list1Item} 
            value={list1Item} 
            onDragStart={(e) => handleDragStart(e)}
            onDragOver={e => e.preventDefault()}
            onDrop={(e) => handleDropIntoList1(e)}
            >
              {list1Item}
            </li>
          })
        }
      </ul>
      <div>list 2:</div>
      <ul className='list-disc'>
        {
          list2.map((list2Item) => {
            return <li 
            draggable="true" 
            key={list2Item} 
            id={list2Item} 
            value={list2Item}
            onDragStart={(e) => handleDragStart(e)}
            onDragOver={e => e.preventDefault()}
            onDrop={(e) => handleDropIntoList2(e)}
            >
              {list2Item}
            </li>
          })
        }
      </ul>
    </div>
  )
}
