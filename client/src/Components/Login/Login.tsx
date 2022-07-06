import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const OnClickLogin = async () => {
        try {
            const response = await axios.post("http://localhost:3001/users/login", { userName, password })
            const serverResponse = response.data;

            navigate('/vacations');
        }
        catch (error: any) {
            alert(error.message);
        }
    }
    return (
        <div className="Header">
            <input type="text" placeholder="user name" onChange={event => setUserName(event.target.value)} /><br />
            <input type="text" placeholder="password" onChange={event => setPassword(event.target.value)} /><br />
            <button type="button" value="login" onClick={OnClickLogin} />
        </div>
    );
};

export default Login;