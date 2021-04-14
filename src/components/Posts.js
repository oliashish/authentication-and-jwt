import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function Posts() {
    let history = useHistory();
    let param = useParams();
    const [Posts, setPosts] = useState();
    useEffect(() => {
        async function fetchPosts() {
            const posts = await Axios.get("/posts");
            if (posts.data === "Access Denied") {
                alert(`${posts.data} - Please login to get access to data....`);
                history.push("/guide");
            } else {
                console.log(posts.data);
                setPosts({ Posts: posts.data });
                console.log(Posts);
            }
        }
        fetchPosts();
    }, [param]);

    return (
        <div>
            <h2>
                Welcome to this page "posts".
                <br /> If you get access here that means you are successfully
                logged in.
                <br /> This is the home page of the app.
            </h2>
        </div>
    );
}

export default Posts;
