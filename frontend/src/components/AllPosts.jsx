// This component Will read all the posts from the API and display them as a list, users can click and read the full article and comments and make comments

import { useState, useEffect } from "react";
import { getAllPosts } from "../utils/apiReaderQueries";
function AllPosts() {
  const [allThePosts, setAllThePosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const apiPathAllPosts = "reader/posts";
        const fetchAllPosts = await getAllPosts(apiPathAllPosts);

        console.log(fetchAllPosts.data);
        setAllThePosts(fetchAllPosts.data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchPosts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (allThePosts.length === 0) {
    return (
      <div>
        <h3>Loading....</h3>
      </div>
    );
  }

  return (
    <div>
      <h1>All Posts</h1>
      <div>
        {allThePosts.map((posts) => (
          <ul key={posts.id}>
            <li>
              <a href={`reader/posts/${posts.id}`}>
                Title: {posts.blog_post_title}{" "}
              </a>
              Published Date: {posts.blog_post_publish_timestamp}, Author ID:
              {posts.blog_post_author_id}, Post ID:{posts.id}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default AllPosts;
