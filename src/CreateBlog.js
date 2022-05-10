import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("adam");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author };
    setIsLoading(true);
    fetch("http://localhost:5000/blogs", {
      //fetch("https://my-json-server.typicode.com/shabiKi/my-blogs/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("blog added");
      // console.log(blog);
      //   setTitle("");
      //   setBody("");
      //   setAuthor("adam");
      setIsLoading(false);
      history.push("/");
      console.log(blog);
    });
  };
  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="jhon">Jhon</option>
          <option value="adam">Adam</option>
        </select>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default CreateBlog;
