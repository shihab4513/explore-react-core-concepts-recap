/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Post from "./Post";
import './Post.css'

export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))

    }, [])
    return (
        <div className="box">
            <h3>Posts : {posts.length} </h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
}


/*
=>To load data below step you have to do
1.Create a state to store the data
2.Create useEffect with no dependencies
3. USe fetch to load data


*/ 