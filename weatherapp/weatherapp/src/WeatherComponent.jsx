import React from 'react'

export default function WeatherComponent({title, listData}) {
  const listValues = Object.entries(listData);
  console.log("key-value list generated for title:", title, listValues);
  return (
    <>
      <h4>{title}</h4>
      <ul>
        {
          listValues.map(listItem => {
            return <li key={listItem[1]}> {listItem[0]}: {listItem[1]} </li>
          })
        }
      </ul>
    </>
  )
}
