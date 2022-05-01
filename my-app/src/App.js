import React, { useState , useEffect } from 'react';
import UserForm from './components/Form/UserForm';
import FlashCardList from './components/FlashCardList/FlashCardList';
import axios from 'axios'

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

const dummyPost = {
     "lang1": "en",
     "lang2": "hi",
     "word_num": 10
}

function App() {
  
  const [words, setWords] = useState(dummyWords);

  const [data, setData] = useState(JSON.stringify({
    "lang1": "en",
    "lang2": "hi",
    "word_num": 10
  }));

  const submitUserDataHandler = (userData) => {
    let jsonData = JSON.stringify(userData);
    setData(jsonData);
  }

  var config = {
    method: 'post',
    url: 'http://localhost:5000/language/convert/',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

  return (
    <div>
      <UserForm onSubmitUserInput={submitUserDataHandler}></UserForm>
      <FlashCardList words={words}></FlashCardList>
    </div>
  );
}

export default App;
