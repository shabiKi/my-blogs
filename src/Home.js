import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const devEnv = process.env.NODE_ENV !== "production";
  //const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch(
    `${
      devEnv
        ? "http://localhost:8000/blogs"
        : "https://blogsapp1.herokuapp.com/blogs"
    }`
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
