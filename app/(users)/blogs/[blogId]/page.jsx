"use client";

import { use } from "react";

//we can directly read promises and context without using .then or async/await using use hook
const SingleBlogPost = (props) => {
    // console.log("props:",props);
    const blogs=use(props.params);
    console.log("params", blogs);

    const blogsQuery=use(props.searchParams);
    console.log("searchParams", blogsQuery);  //example: ?color=black
    
  return (
    <div className="consistent flex gap-10">
      <h6>Blog ID: {blogs.blogId}</h6>
    </div>
  )
}

export default SingleBlogPost