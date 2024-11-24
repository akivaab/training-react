import { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [body, setBody] = useState("")

  return ( 
    <div className="max-w-2xl mx-auto px-1">
      <h2 className="text-center">Add a new post</h2>
      <form>
        <label className="block">Title:</label>
        <input className="block w-full"
          type="text"
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="block">Author:</label>
        <input className="block w-full"
          type="text" 
          required 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label className="block">Blog Post:</label>
        <textarea className="block w-full"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </form>
    </div>
  );
}

export default CreatePost;