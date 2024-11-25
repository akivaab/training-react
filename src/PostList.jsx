function PostList({ posts, onDelete }) {
  return ( 
    <div className="container mx-auto items-center flex">
      {posts.map((post) => (
        <div key={post.date}>
          <h2>{post.title}</h2>
          <button onClick={() => onDelete(post)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostList;