import React, { useState } from 'react';
import UserForm from './components/Form/UserForm';
import FlashCardList from './components/FlashCard/FlashCardList';

const dummyWords = [
  {
    lang1: 'Hello',
    lang2: 'Salut'
  },
  {
    lang1: 'Here',
    lang2: 'Ici'
  },
  {
    lang1: 'Sorry',
    lang2: 'Pardon'
  },
  {
    lang1: 'No',
    lang2: 'Non'
  },
  {
    lang1: 'When',
    lang2: 'Quand'
  }
];

function App() {

  const [words, setWords] = useState(dummyWords);

  return (
    <div className='App'>
      <UserForm></UserForm>
      <FlashCardList words={words}></FlashCardList>
    </div>
  );
}

export default App;
