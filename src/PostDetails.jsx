import { useParams } from "react-router-dom";

function PostDetails({ posts, onDelete }) {
  const { id } = useParams()
  const post = posts.find(p => p.date == id)

  return (
    <div>
      <h2>{post.title}</h2>
      <h3>Written by {post.author}</h3>
      <h3>Posted {post.date}</h3>
      <p>{post.body}</p>
      <button onClick={() => onDelete(post)}>Delete</button>
      {/* Change back to PostList page after deletion */}
    </div>
  );
}

export default PostDetails;