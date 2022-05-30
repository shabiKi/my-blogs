import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const devEnv = process.env.NODE_ENV !== "production";
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch(
    `${
      devEnv
        ? "http://localhost:8000/blogs/" + id
        : "https://blogsapp1.herokuapp.com/blogs/" + id
    }`
  );

  const handleClick = () => {
    fetch(
      `${
        devEnv
          ? "http://localhost:8000/blogs/" + blog.id
          : "https://blogsapp1.herokuapp.com/blogs/" + blog.id
      }`,
      {
        method: "DELETE",
      }
    ).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
