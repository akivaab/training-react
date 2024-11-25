import { Link } from "react-router-dom";

function PostList({ posts, onDelete }) {
  return ( 
    <div className="container mx-auto items-center">
      {posts.map((post) => (
        <div className="flex" key={post.date}>
          <Link to={`post/${post.date}`}>
            <h2>{post.title}</h2>
          </Link>
          <button onClick={() => onDelete(post)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostList;