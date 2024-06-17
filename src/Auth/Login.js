import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../ContextAPI/UserContext";
import axios from "axios";

const Login = () => {

    const navigate = useNavigate();
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    //state variables of the login data
    const { userToken, setUserToken, setUserName, setUserEmailId } = useContext(UserContext);
    //initialising the global variable of token to use in in this component and send to contextAPI


    const submitForm = async (e) => {
        e.preventDefault();
        const loginData = { email_id: emailId, password };
        const loginApi = process.env.REACT_APP_USER_LOGIN_API;
        const response = await axios.post(loginApi, loginData);
        const data = response.data;
        const token = data.token;
        const user = data.user;
        const name = user.name;
        const userEmail = user.email_id;
        //API call and extract data from backend
        setUserName(name);
        setUserEmailId(userEmail);
        setUserToken(token);
        //Set the global data of token and user extracted from backend
    }

    useEffect(() => {
        if (userToken) {
            navigate("/");
        }
    }, [userToken])
    // navigate to the login page if token found.

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <h3>LOG IN USER</h3>
                    <form onSubmit={submitForm}>
                        <div className="col-sm-4">
                            <label>Email Id:</label>
                            <div>
                                <input onChange={(e) => setEmailId(e.target.value)} type="text" className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-sm-4 my-3">
                            <label>Password:</label>
                            <div>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control"></input>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-info">Login</button>
                        </div>
                    </form >
                    <div className="my-3">
                        Not a User Yet? &nbsp; <Link to="/auth/register">Register</Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;