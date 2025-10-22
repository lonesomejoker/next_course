import React from 'react'

//catch-all segment [...slug] 
const Reviews = async (props) => {
  //route: /reviews/technology/frontend/react ,these all paths are catched by [...slug]
  const {slug} = await props.params;
  console.log('slug', slug);
  return (
    <div>Reviews</div>
  )
}

export default Reviews