import React, { useState , useEffect } from 'react';
import UserForm from './components/Form/UserForm';
import FlashCardList from './components/FlashCardList/FlashCardList';
import axios from 'axios'

function App() {
  
  const [words, setWords] = useState([]);

  const [data, setData] = useState();

  const submitUserDataHandler = (userData) => {
    let jsonData = JSON.stringify(userData);
    setData(jsonData);
  }

  useEffect(() => {
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
      jsonDataConverter(JSON.stringify(response.data));
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [data])

  const jsonDataConverter = (rawData) => {
      let objData = JSON.parse(rawData);
      let goodData = [];
      const len = objData.Words.length;
      for( let i = 0; i<len ; i++) {
        goodData.push(
          { 
            lang1: objData.Words[i], 
            lang2: objData.Answers[i]
          }
        )
      }
      setWords(goodData);
  }  

  return (
    <div>
      <UserForm onSubmitUserInput={submitUserDataHandler}></UserForm>
      <FlashCardList words={words}></FlashCardList>
    </div>
  );
}

export default App;
