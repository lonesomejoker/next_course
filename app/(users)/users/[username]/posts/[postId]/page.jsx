const SingleProfilePost = async (props) => {
  //   console.log("params", props);
  const user = await props.params;
  console.log("params", user);
 //we can use dynamic routes in server components only
  return (
    <div className="consistent flex gap-10">
      <h6>User: {user.username}</h6>
      <h6>Post ID: {user.postId}</h6>
    </div>
  );
};

export default SingleProfilePost;
