import React from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../../firebase";
import "firebase/firestore";

const Dashboard = () => {
    const history = useHistory();

    const handleClick = (event: any) => {
        event.preventDefault();

        firebase
        .auth()
        .signOut()
        .then(res => {
            history.push("/auth/login");
        })
    }

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Dashboard</h1>
            <h2>Welcome to Dashboard!</h2><br/><br/>
            <button onClick={handleClick}>Logout</button>
        </div>
    );
}

export default Dashboard;