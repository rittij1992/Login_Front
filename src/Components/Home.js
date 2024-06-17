import { useContext, useEffect } from "react";
import { UserContext } from "../ContextAPI/UserContext";

const Home = () => {

    const {userName, userEmailId} = useContext(UserContext);

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem("UserToken");
        window.location.reload();
    };


    return (
        <>
            <div className="container my-4">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="text-center">
                            <div>
                                <h2>Welcome To Home Page</h2>
                            </div>
                            <div>
                                <p>User: {userName}</p>
                                <p>Email: {userEmailId}</p>
                            </div>
                        </div>

                        <div className="my-4 text-center">
                            <button onClick={logout} type="submit" className="btn btn-sm btn-info">Log Out</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Home;