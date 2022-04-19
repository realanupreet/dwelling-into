import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            {blog.title} by {blog.author}
            <button
              className="delete-blog"
              onClick={() => {
                handleDelete(blog.id);
              }}
            >
              Delete Blog
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
