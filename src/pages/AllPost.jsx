import { Fragment, useEffect, useState } from "react";
import databaseService from "../appwrite/configDb";

import { PostCard, Container } from "../components";
const AllPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    databaseService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <Fragment>
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default AllPost;
