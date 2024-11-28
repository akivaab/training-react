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
    <div className="mx-auto max-w-3xl p-4 text-left">
      {isUpdating ? (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="mb-4 block w-full rounded-sm border border-slate-400 bg-green-50 p-1 text-2xl font-medium"
              type="text"
              required
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="mb-4 block w-full rounded-sm border border-slate-400 bg-green-50 p-1 text-lg font-normal"
              type="text"
              required
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <textarea
              className="mb-4 block h-80 w-full rounded-sm border border-slate-400 bg-green-50 p-1"
              required
              value={body}
              placeholder="Blog Post"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <button
              className="mx-auto mt-4 block rounded-2xl bg-green-800 p-3 text-white shadow transition-shadow hover:shadow-lg"
              type="submit"
            >
              Save Changes
            </button>
          </form>
        </div>
      ) : (
        <>
          <div className="mx-2 flex items-start justify-between">
            <div className="mb-3 p-1">
              <h2 className="pb-1 text-2xl font-medium text-green-700">
                {title}
              </h2>
              <h3 className="text-lg font-normal text-slate-700">
                Written by {author}
              </h3>
              <h3 className="text-lg font-normal text-slate-700">
                Posted {post.date}
              </h3>
            </div>
            <div className="my-auto space-x-3">
              <button
                className="w-24 rounded-2xl bg-green-800 p-3 text-white shadow transition-shadow hover:shadow-lg"
                onClick={() => setIsUpdating(true)}
              >
                Edit
              </button>
              <button
                className="w-24 rounded-2xl bg-red-800 p-3 text-white shadow transition-shadow hover:shadow-lg"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
          <p className="text-slate-950">{body}</p>
        </>
      )}
    </div>
  );
}

export default PostDetails;
