import { useState, useEffect } from "react";

const useGithub = (username) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
        // https://api.github.com/users/
        const fetchData = () => {
            setIsPending(true);
            fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => {
                setUser(data);
                console.log(data);
                setIsPending(false);
            }).catch(err => {
                setError(err);
                console.log(error.message);
                setIsPending(false);
            })
        };
        fetchData();
    }, [username])

    return {user, isPending, error};
}
 
export default useGithub;