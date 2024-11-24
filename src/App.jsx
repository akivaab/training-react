import { useEffect, useState } from "react"
import Header from "./Header"
import PostList from "./PostList"
import CreatePost from "./CreatePost"

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem('posts')) || [])
  }, [])

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts])

  return (
    <div>
      <Header />
      <PostList posts={posts}/>
      <CreatePost />
    </div>
  )
}

export default App
