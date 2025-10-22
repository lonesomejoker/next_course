const SingleProfile = async (props) => {
  //console.log("params", props);
  const user = await props.params;
  console.log("params", user);

  return <div className="consistent"><p>User:{user.username}</p></div>;
};

export default SingleProfile;
