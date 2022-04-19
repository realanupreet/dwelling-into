import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const [likes, setlikes] = useState(4);

  ///upper are the states

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
  const { data: blogs, isPending, error } = useFetch(
    "https://json-server.realanupreet.repl.co/posts"
  );
  //return function after this

  return (
    <div className="home">
      <h1 style={{ color: "grey" }}>This is the {likes} home page</h1>

      {error && <div>{error}</div>}

      {isPending && (
        <img
          src="https://c.tenor.com/KAF_PYnpnQwAAAAC/glee-santana-lopez.gif"
          alt="oh-boy"
        />
      )}

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
      <br />
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={(e) => {
          handleClickAgain("hornb", e);
        }}
      >
        Click me again
      </button>
    </div>
  );
};
export default Home;
