import React from "react";

const fetchPost = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};
export default async function Posts() {
  const posts = await fetchPost();
  return (
    <section>
      {posts.map((post) => (
        <article key={`${post.id}`}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </section>
  );
}
