const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          {blog.title} by {blog.author}
          <button
            className="delete-blog"
            onClick={() => {
              handleDelete(blog.id);
            }}
          >
            Delete Blog
          </button>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
