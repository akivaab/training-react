import { useState } from "react";

function CreatePost({ onCreate }) {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [body, setBody] = useState("")

  return ( 
    <div className="max-w-2xl mx-auto px-1">
      <h2 className="text-center">Create a new post</h2>
      <form>
        <label className="block">Title:</label>
        <input className="block w-full bg-green-100"
          type="text"
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="block">Author:</label>
        <input className="block w-full bg-green-100"
          type="text" 
          required 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label className="block">Blog Post:</label>
        <textarea className="block w-full bg-green-100"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button className="bg-green-800 text-white"
          onClick={() => onCreate({
            title: title,
            author: author,
            date: Date.now(),
            body: body,
          })}
        >Post to Blog</button>
      </form>
    </div>
  );
}

export default CreatePost;