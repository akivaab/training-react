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

  const createPost = newPost => setPosts(prevPosts => [...prevPosts, newPost])
  const deletePost = deletedPost => setPosts(prevPosts => prevPosts.filter(post => post.date !== deletedPost.date))

  return (
    <div>
      <Header />
      <PostList posts={posts} onDelete={deletePost}/>
      <hr />
      <CreatePost onCreate={createPost}/>
    </div>
  )
}

export default App
