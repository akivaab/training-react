import { format } from "date-fns";
import { useState } from "react";

function Comments({ post, onUpdate }) {
  const [isCommenting, setIsCommenting] = useState(false);
  const [commentAuthor, setCommentAuthor] = useState("");
  const [commentBody, setCommentBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentAuthor && commentBody) {
      post.comments.push({
        author: commentAuthor,
        date: Date.now(),
        body: commentBody
      });
      onUpdate(post);
      setIsCommenting(false);
    }
  };

  return (
    <section className="mr-auto max-w-xl">
      <button
        className="mb-2 w-56 rounded-2xl bg-green-800 p-3 text-white shadow transition-shadow hover:shadow-lg"
        onClick={() => setIsCommenting(!isCommenting)}
      >
        {`Click Here to ${isCommenting ? "Cancel" : "Comment!"}`}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isCommenting ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <form className="rounded border p-4 shadow" onSubmit={handleSubmit}>
          <input
            className="m-1 w-full rounded-sm border p-2"
            type="text"
            required
            placeholder="Your Name"
            value={commentAuthor}
            onChange={(e) => setCommentAuthor(e.target.value)}
          />
          <textarea
            className="m-1 w-full rounded-sm border p-2"
            required
            placeholder="Comment"
            value={commentBody}
            onChange={(e) => setCommentBody(e.target.value)}
          ></textarea>
          <button
            className="mx-1 rounded bg-green-800 p-2 text-white shadow transition-shadow hover:shadow-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      {post.comments.length > 0 ? (
        post.comments.map((comment) => (
          <div
            key={comment.date}
            className="my-1 rounded border-2 p-4 shadow transition-shadow hover:shadow-md"
          >
            <h3 className="text-sm font-light text-slate-700">
              {comment.author} wrote at {format(comment.date, "MMM dd, yyyy")}:
            </h3>
            <p className="text-base font-normal text-slate-900">
              {comment.body}
            </p>
          </div>
        ))
      ) : (
        <h2 className="my-1 text-lg text-slate-800">
          This post has no comments.
        </h2>
      )}
    </section>
  );
}

export default Comments;
