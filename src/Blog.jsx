import "./Blog.css";
import { useState, useEffect } from "react";

function Blog() {
  const [posts, setPosts] = useState([]);
  const api = "http://127.0.0.1:8000/api/blogs";

  useEffect(() => {
    fetch(api)
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch(err => console.error("Fetch error:", err));
  }, []);

    return (
    <>
    
    <h1> Welcome to My blog Page</h1>
        
    <div className="blog-section">
      {posts.map((post) => (
        <div key={post.id} className="blog-card">
          <p><strong>Last updated:</strong> {post.last_updated}</p>

          {post.image && (
            <img
              src={post.image}
              alt={post.title}
            />
          )}

          <h2>{post.title}</h2>
          <h4>Written By: {post.author}</h4>
          <p><strong>Category:</strong> {post.category}</p>
          <p>{post.description}</p>
          <p><em>Slug:</em> {post.slug}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default Blog;
