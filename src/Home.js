import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [likes, setlikes] = useState(4);

  const [blogs, setBlogs] = useState(null);

  const handleClick = (e) => {
    console.log("Hey you clicked me", e);
    setlikes(3);
  };
  const handleClickAgain = (name, e) => {
    console.log("hello", name, e.target);
    setlikes("mario");
  };

  const handleDelete = (id) => {
    setBlogs(
      blogs.filter((blog) => {
        return blog.id !== id;
      })
    );
  };

  //fetching happens hereeeee

  useEffect(() => {
    fetch("https://json-server.realanupreet.repl.co/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        console.log(data);
      });
  }, []);

  //return function after this

  return (
    <div className="home">
      <h1 style={{ color: "grey" }}>This is the {likes} home page</h1>

      {blogs && (
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      )}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.id === 2)}
          title="All Blogs with id: 2"
          handleDelete={handleDelete}
        />
      )}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.name === "moshi")}
          title="All blogs with name as moshi"
          handleDelete={handleDelete}
        />
      )}
      {/* 
  
        Buttons Over here 
  
      */}
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={(e) => {
          handleClickAgain("horn", e);
        }}
      >
        Click me again
      </button>
    </div>
  );
};
export default Home;
