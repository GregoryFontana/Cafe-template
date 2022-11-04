// AuthPage.jsx
import { useState } from 'react';
import SignUpForm from '../components/SignUpForm.js';
import LoginForm from '../components/LoginForm';


const AuthPage = ({setUser}) => {
    const [showSignUp, setShowSignUp] = useState(true)
return(
        <div>
            <h1>Authorization Page</h1>
            {showSignUp ? <SignUpForm setUser={setUser}/> : <LoginForm setUser={setUser}/>}

<button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? "Log In" : "Sign Up"} </button>
        </div>
    ) 
}

export default AuthPage