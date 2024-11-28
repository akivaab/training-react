import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="mx-auto max-w-3xl p-4 text-center">
      <h1 className="p-2 text-3xl text-slate-800">Page Not Found</h1>
      <h2 className="p-2 text-xl text-slate-800">
        Sorry, but we could not find the page you are looking for.
      </h2>
      <Link to="/">
        <button className="mt-4 rounded-2xl bg-green-800 p-3 text-white shadow transition-shadow hover:shadow-lg">
          Back to Home
        </button>
      </Link>
    </div>
  );
}

export default Error;
