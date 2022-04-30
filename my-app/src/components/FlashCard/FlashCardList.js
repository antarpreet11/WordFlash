import React from 'react'
import FlashCard from './FlashCard';

const FlashCardList = ({ words }) => {
  return (
    <div>
        {words.map(word => {
            return <FlashCard l1={word.lang1} l2={word.lang2} key={Math.random()}></FlashCard>
        })}
    </div>
  )
}

export default FlashCardList