import React, { useState } from 'react';
import styles from './UserForm.module.css'

const UserForm = () => {

    const [userLang, setUserLang] = useState('');
    const [newLang, setNewLang] = useState('');
    const [newNum, setNewNum] = useState('');

    const userLangChangeHandler = (event) => {
        setUserLang(event.target.value);
    }

    const newLangChangeHandler = (event) => {
        setNewLang(event.target.value);
    }

    const newNumChangeHandler = (event) => {
        setNewNum(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const userData = {
            lang1: userLang, 
            lang2: newLang,
            num: newNum
        }
        setUserLang('');
        setNewLang('');
        setNewNum(0);
        console.log(userData);
    }

    return (
      <form onSubmit = {submitHandler} className={styles.form}>
          <div>
            <label>User Language</label>
            <input type="text" onChange={userLangChangeHandler} value={userLang}></input>
          </div>
          <div>
            <label>New Language</label>
            <input type="text" onChange={newLangChangeHandler} value={newLang}></input>
          </div>
          <div>
            <label>No of words</label>
            <input type="number" onChange={newNumChangeHandler} value={newNum}></input>
          </div>
          <div>
              <button type='submit'>Sumbit</button>
          </div>
      </form>
    )
}

export default UserForm;