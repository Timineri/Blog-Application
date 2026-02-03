import React from "react";
import { useState, useEffect } from 'react';
const Card = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
  }, []);

  return (
    <div>

      {posts.map((post) => (
        <div class="card w-96 bg-base-100 card-xl shadow-sm">
        <div class="card-body">
          <h2 class="card-title">{post.title}</h2>
          <p>{post.body}</p>
          <div class="justify-end card-actions">
            <button class="btn btn-primary">Read more</button>
          </div>
          </div>
          </div>
      ))}
    </div>
  );
}

export default Card;