import { Link } from "react-router-dom";

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
              <h2 className="text-xl font-medium text-green-700">
                {post.title}
              </h2>
              <h3 className="text-base font-normal text-slate-700">
                {post.author} &#9679; {post.date}
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
