import React from 'react'

export default function MeetCard({meet}) {
  return (
    <>
        <div className='card'>
            <h1>{meet.date}</h1>
            <h2>{meet.name}</h2>
            <p>Location: {meet.location}</p>
            <p>Entry Deadline: {meet.deadline}</p>
        </div>
    </>
  )
}
