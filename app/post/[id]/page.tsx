import React from "react";

const Post = ({ params }: any) => {
  const { id } = params;
  return <h1>Este es el post {id}</h1>;
};

export default Post;
