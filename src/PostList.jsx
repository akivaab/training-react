import { Link } from "react-router-dom";
import { format } from "date-fns";

function PostList({ posts }) {
  return (
    <div className="mx-auto max-w-3xl p-4">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.date}
            className="mb-3 rounded-md border-2 p-4 shadow transition-shadow hover:shadow-md"
          >
            <Link to={`post/${post.date}`}>
              <h2 className="font-tahoma truncate text-xl font-medium text-green-700 sm:whitespace-normal sm:break-words">
                {post.title}
              </h2>
              <h3 className="truncate text-base font-normal text-slate-700 sm:whitespace-normal sm:break-words">
                {post.author} &#9679; {format(post.date, "MMM dd, yyyy")}
              </h3>
            </Link>
          </div>
        ))
      ) : (
        <h2 className="pt-4 text-center text-3xl text-slate-800">
          There are currently no posts.
        </h2>
      )}
    </div>
  );
}

export default PostList;
