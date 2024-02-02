import { useState } from "react";
import GithubUser from "./GithubUser";

const FindUser = () => {

    const [userName, setUserName] = useState("");

    return ( 
        <div className="find-user">
            <h1>Find User</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="username"></label>
                    <input type="text" placeholder="Enter username"
                        onChange={(event) => setUserName(event.target.value)}
                    />
                </div>
            </form>
            <div className="result">
                {userName ? <GithubUser username={userName}></GithubUser> :
                <h1>Please Initiate a search !!</h1> }
            </div>
        </div>
    );
}
 
export default FindUser;