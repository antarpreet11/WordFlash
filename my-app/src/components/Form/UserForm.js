import React, { useState } from 'react';


const UserForm = () => {

    const [userLang, setUserLang] = useState('');
    const [newLang, setNewLang] = useState('');

    const userLangChangeHandler = (event) => {
        setUserLang(event.target.value);
    }

    const newLangChangeHandler = (event) => {
        setNewLang(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const userData = {
            lang1: userLang, 
            lang2: newLang
        }
        setUserLang('');
        setNewLang('');
        console.log(userData);
    }

    return (
      <form onSubmit = {submitHandler}>
          <div>
            <label>User Language</label>
            <input type="text" onChange={userLangChangeHandler} value={userLang}></input>
          </div>
          <div>
            <label>New Language</label>
            <input type="text" onChange={newLangChangeHandler} value={newLang}></input>
          </div>
          <div>
              <button type='submit'>Sumbit</button>
          </div>
      </form>
    )
}

export default UserForm;