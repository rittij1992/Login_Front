import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passMatchError, setPassMatchError] = useState(false);
    const [messageResponse, setMessageResponse] = useState("");
    // State variables


    const submitForm = async (e) => {
        e.preventDefault();
        // Form Handling Function for User Registration
        if (password === confirmPassword) {
            // If both set and confirm password matches, call the user registration api
            setPassMatchError(false);
            // set passMatchError variable false to disappear error message
            const registerData = { name, email_id: emailId, password };
            const registerAPI = process.env.REACT_APP_USER_REGISTER_API;
            const response = await fetch(registerAPI,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(registerData)
                });
            const data = await response.json();
            setMessageResponse(data.message);
        } else {
            // If both set and confirm password does not matches, set passMatchError variable true to handel error message
            setPassMatchError(true);
        }
    }
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <h3>REGISTER USER</h3>
                    <form onSubmit={submitForm}>
                        <div className="col-sm-4">
                            <label>Full Name:</label>
                            <div>
                                <input onChange={(e) => setName(e.target.value)} type="text" className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-sm-4 my-3">
                            <label>Email Id:</label>
                            <div>
                                <input onChange={(e) => setEmailId(e.target.value)} type="text" className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <label>Set Password:</label>
                            <div>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-sm-4 my-3">
                            <label>Confirm Password:</label>
                            <div>
                                <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="form-control"></input>
                            </div>
                        </div>
                        <p style={passMatchError ? { "display": "block" } : { "display": "none" }} className="text-danger"><strong>Password does not match</strong></p>
                        <p style={messageResponse ? { "display": "block" } : { "display": "none" }} className="text-info"><strong>{messageResponse}</strong></p>
                        <div>
                            <button type="submit" className="btn btn-info text-center">Register</button>
                        </div>
                    </form >
                    <div className="my-3">
                        Already Registered? &nbsp; <Link to="/auth/login">Log In</Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Register;