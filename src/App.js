
import './App.css';
import React, {useState} from 'react';
import axios from "axios";
import qs from "qs";

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeHandler = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }


    const onChangeValue = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = () => {
        const data = {email, password, provider: 'google', fullName: 'test', phone: '01028100744'}
        axios.post('http://localhost:8000/api/auth/signup', data, { withCredentials: true })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    const test = () => {
        axios.get('https://accounts.google.com/o/oauth2/v2/auth?scope=email&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=https%3A%2F%2Fapi.shortlysoftware.com%2Fapi&client_id=76548319435-id0o20be3snufci69kq72vjqpckokc8f.apps.googleusercontent.com').then((res) => {
            console.log(res.data);
        })
    }

  return (
    <div className="App">
      <a href="http://localhost:8000/api/auth/google" className="googleBtn">
        <img src="https://img.icons8.com/color/48/000000/google-logo.png" />Google with Login</a>
      <button onClick={test}>test</button>
        <div>
            <div>
                <input type='text' value={email} onChange={onChangeHandler}/>
                <input type='text' value={password} onChange={onChangeValue}/>
                <button onClick={onSubmit}>클릭</button>
            </div>

        </div>
    </div>
  );
}

export default App;
