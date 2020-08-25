import React from 'react';
import './App.css';
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <User></User>
    </div>
  );
}

export default App;
