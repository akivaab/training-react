import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function PostDetails({ posts, onDelete, onUpdate }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.find((p) => p.date === Number(id));

  if (!post) {
    return (
      <div>
        <h1>
          Sorry, looks like the blog post you are looking for was deleted!
        </h1>
        <Link to="/">Check out other posts!</Link>
      </div>
    );
  }

  const [isUpdating, setIsUpdating] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [author, setAuthor] = useState(post.author);
  const [body, setBody] = useState(post.body);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && body) {
      post.title = title;
      post.author = author;
      post.body = body;
      onUpdate(post);
      setIsUpdating(false);
    }
  };

  const handleDelete = () => {
    onDelete(post);
    navigate("/", { replace: true });
  };

  return (
    <div>
      {isUpdating ? (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="block w-full bg-green-100"
              type="text"
              required
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="block w-full bg-green-100"
              type="text"
              required
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <textarea
              className="block w-full bg-green-100"
              required
              value={body}
              placeholder="Blog Post"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <button className="bg-green-800 text-white" type="submit">
              Save Changes
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2>{title}</h2>
          <h3>Written by {author}</h3>
          <h3>Posted {post.date}</h3>
          <p>{body}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => setIsUpdating(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default PostDetails;
