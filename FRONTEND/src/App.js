import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className='wrapper'>
    <form action="">
      <h1>LOGIN ID</h1>
      <div classroom="input-box">
        <input type ="text" placeholder ='USERNAME' required/>
      </div>
      <div classroom="input-box">
        <input type ="text" placeholder ='PASSWORD' required/>
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
