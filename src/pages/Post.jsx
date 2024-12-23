import "../assets/css/componentes/card.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { buscar } from "../api/api";

const Post = ({ url }) => {
  const [post, setPost] = useState({});

  // console.log(useParams())
  const { id } = useParams();
  //   console.log(id);

  const navigate = useNavigate();

  useEffect(() => {
    buscar(`/posts/${id}`, setPost).catch((error) => {
      navigate("/not-found");
    });
  }, [id]);

  return (
    <main className="container flex flex--center">
      <article className="card post">
        <h2 className="post-card__title">{post.title}</h2>
        <p className="text__card">{post.body}</p>
      </article>
    </main>
  );
};

export default Post;
