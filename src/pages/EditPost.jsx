import { useState, useEffect, Fragment } from "react";
import { Container, PostForm } from "../components";
import databaseService from "../appwrite/configDb";
import { useParams, useNavigate } from "react-router-dom";
const EditPost = () => {
  const [post, setPost] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      databaseService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <Fragment>
      <div className="py-8">
        <Container>
          <PostForm post={post} />
        </Container>
      </div>
    </Fragment>
  ) : null;
};

export default EditPost;
