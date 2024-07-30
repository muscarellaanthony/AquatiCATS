import React from 'react'
import './meetcard.scss'
import EnterMeet from '../EnterMeet/enterMeet';

export default function MeetCard({ meet }) {
  return (
    <>
      <div className='card'>
        <div className="wrapping">
          <h1>{meet.date}</h1>
          <h2>{meet.name}</h2>
          <p>Location: {meet.location}</p>
          <p>Entry Deadline: {meet.deadline}</p>
          <EnterMeet />  
        </div>
      </div>
    </>
  )
}
