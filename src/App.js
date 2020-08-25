import React, { useState, useEffect } from 'react';
import './App.css';
import User from './components/User/User';
import Info from './components/Info/Info';
import salaries from '../src/fakeData/salary';

function App() {
  const [users, setUsers] = useState([]);
  const [friendList, setFriendList] = useState([]);
  const [salaryList, setSalaryList] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data => setUsers(data.results));
  }, []);

  const handleAddFriend = (newFriend, salary) => {
    const newFriendList = [...friendList, newFriend];
    setFriendList(newFriendList);
    const newSalaryList = [...salaryList, salary];
    setSalaryList(newSalaryList);
    localStorage.setItem('friendList', JSON.stringify(friendList));
    localStorage.setItem('salaryList', JSON.stringify(salaryList));
  };

  return (
    <div className="app">
      <Info friendList={friendList} salaryList={salaryList}></Info>
      <div className="userInfo">
      {
        users.map((user, index) => <User user={user} salary={salaries[index]} key={user.cell} handleAddFriend={handleAddFriend}></User>)  
      }
      </div>
    </div>
  );
}

export default App;
