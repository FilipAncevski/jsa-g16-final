import React, { useState } from "react";

const Blogposts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      let res = await fetch("/api/v1/blog", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("jwt")}`,
        },
      });
      let data = await res.json();
      setPosts(data);
      console.log(data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <button onClick={getPosts}>get posts</button>
      {posts &&
        posts.map((post) => {
          return <h1 key={post.id}>{post.title}</h1>;
        })}
    </div>
  );
};

export default Blogposts;
