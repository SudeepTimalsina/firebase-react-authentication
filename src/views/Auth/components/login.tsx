import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../../firebase";
import "firebase/auth";
import "firebase/firestore";
import { AuthContext } from "../../../AuthProvider";

interface UserData {
    email: string;
    password: string;
}

const Login = () => {
    const authContext = useContext(AuthContext);
    const history = useHistory();
    const [values, setValues] = useState({
        email: "",
        password: ""
    } as UserData);

    const handleClick = () => {
       history.push("/auth/signup") 
    }

    const handleChange = (event: any) => {
        event.persist();
        setValues(values => ({
            ...values, 
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();

        firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(res => {
            authContext.setUser(res);
            console.log(res, 'res')
            history.push("/dashboard");
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message);
        });
    }

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" value={values.email} placeholder="Enter your Email" onChange={handleChange} /><br /><br />
                <input type="password" name="password" value={values.password} placeholder="Enter your Password" onChange={handleChange} /><br /><br />
                <button>Login</button>
                <p>Not logged in yet?</p>
                <button onClick={handleClick}>SignUp</button>
            </form>
        </div>
    );
}

export default Login;