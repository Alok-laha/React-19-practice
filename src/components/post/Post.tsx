import { useEffect, useState } from "react";
import Table from "../table/Table";
import { type Post } from "../../types/post.type";

const columns = [
  { name: "userId", title: "User ID" },
  { name: "id", title: "ID" },
  { name: "title", title: "Title" },
  { name: "body", title: "Body" },
];

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const totalPages = Math.ceil(posts.length / limit);
  useEffect(() => {
    // fetch posts data here
    const fetchPosts = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await response.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const paginatedPosts = posts.slice((currentPage - 1) * limit, currentPage * limit);
  
  return (
    <div>
      <h3>Posts data</h3>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts.length === 0 ? (
        <p>No posts found</p>
      ) : (
        <Table
          rows={paginatedPosts}
          columns={columns}
          pagination={{
            currentPage,
            limit,
            totalPages,
            setPageNumber: setCurrentPage,
            setLimit,
          }}
        />
      )}
    </div>
  );
};

export default Posts;
