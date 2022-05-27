import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("https://blogsapp1.herokuapp.com/blogs");

  //= useFetch("http://localhost:8000/blogs");

  //} = useFetch("https://my-json-server.typicode.com/shabiKi/my-blogs/blogs/");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
