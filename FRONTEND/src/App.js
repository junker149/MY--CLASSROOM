import logo from './logo.svg';
import './App.css';
import {useState} from 'React';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
    <div className='wrapper'>
    <form action="">
      <h1>LOGIN ID</h1>
      <div classroom="input-box">
        <input onchange=((e) =>{
          setUsername(e.target.value);
        }) type ="text" placeholder ='USERNAME' required/>
      </div>
      <div classroom="input-box">
        <input onchange=((e) => {
          setPassword(e.target.value);
        }) type ="text" placeholder ='PASSWORD' required/>
      </div>
      <div className='remember-forget'>
        <label><input type="checkbox" />Remember me </label>
        {/* <a href= "#"> Forgot Password ?</a> */}
      </div>
       <div className='touch'>
      <button type="submit">LOGIN</button>
      </div>
    </form>

    </div>
    </>
  );
}

export default App;
