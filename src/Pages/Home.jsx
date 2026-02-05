import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

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
        <div key={post.id} class="card w-96 bg-base-100 card-xl shadow-sm">
          <div class="card-body">
            <h2 class="card-title">{post.title}</h2>
            <p>{post.body.slice(0, 50)}...</p>
            <div class="justify-end card-actions">
            
                <button class="btn btn-primary" onClick={()=> navigate(`/details/${post.body}`)}>Read more</button>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;