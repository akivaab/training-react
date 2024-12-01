import { useEffect, useState } from "react";
import Header from "./Header";
import PostList from "./PostList";
import CreatePost from "./CreatePost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostDetails from "./PostDetails";
import Error from "./Error";
import Footer from "./Footer";

function App() {
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) || []
  );

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const createPost = (newPost) =>
    setPosts((prevPosts) => [...prevPosts, newPost]);
  const deletePost = (deletedPost) =>
    setPosts((prevPosts) =>
      prevPosts.filter((post) => post.date !== deletedPost.date)
    );
  const updatePost = (updatedPost) =>
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.date === updatedPost.date ? updatedPost : post
      )
    );

  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" exact element={<PostList posts={posts} />} />
            <Route
              path="post/:id"
              element={
                <PostDetails
                  posts={posts}
                  onDelete={deletePost}
                  onUpdate={updatePost}
                />
              }
            />
            <Route
              path="create"
              element={<CreatePost onCreate={createPost} />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
