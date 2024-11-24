import { useEffect, useState } from "react"
import Header from "./Header"
import PostList from "./PostList"

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
    </div>
  )
}

export default App
