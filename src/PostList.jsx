function PostList({ posts }) {
  return ( 
    <div className="container mx-auto items-center">
      {posts.map((post) => (
        <h2>{post}</h2>
      ))}
    </div>
  );
}

export default PostList;