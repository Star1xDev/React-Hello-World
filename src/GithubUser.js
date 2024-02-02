import useGithub from "./hooks/useGithub";

const GithubUser = ({username}) => {

    const {user, isPending, error} = useGithub(username);

    return ( 
        <div className="github-user">
            {isPending && <h2>Loading User info.....</h2> }
            {error && <h2>{error.message}</h2> }
            {user && !isPending &&
             <ul className="details">
                <li>
                    <img src={user.avatar_url} alt={user.login} />
                </li>
                <li>
                    <strong>Name: </strong>{user.name}
                </li>
                <li>
                    <strong>Bio:</strong> {user.bio ? user.bio : "NA"}
                </li>
                <li>
                    <strong>Location: </strong> {user.location ? user.location : "NA"}
                </li>
                <li>
                    <strong>BLog or Site: </strong> {user.blog ? user.blog : "NA"}
                </li>
                <li>
                    <strong>Public Repos:</strong>{" "}
                    {user.public_repos ? user.public_repos : 0}
                </li>
                <li>
                    <strong>Followers: </strong> {user.followers ? user.followers : 0}
                </li>
                <li>
                    <strong>Following: </strong> {user.following ? user.following : 0}
                </li>
             </ul>
            }
        </div>
     );
}
 
export default GithubUser;