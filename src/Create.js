import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  return (
    <div className="form">
      <form>
        <label>Blog Title</label>
        <br />
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />{" "}
        <br />
        <label>Blog Body</label>
        <br />
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>{" "}
        <br />
        <label>Blog Authot</label>
        <br />
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <br />
      </form>
    </div>
  );
};
export default Create;
