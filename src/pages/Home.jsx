import { Fragment, useEffect, useState } from "react";
import databaseService from "../appwrite/configDb";
import { Container, PostCard } from "../components";
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    databaseService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  if (posts.length === 0) {
    return (
      <Fragment>
        <div className="w-full py-8 mt-4 text-center">
          <Container>
            <div className="flex flex-wrap">
              <div className="p-2 w-full">
                <h1 className="text-2xl font-bold hover:text-gray-500">
                  Login to read posts
                </h1>
              </div>
            </div>
          </Container>
        </div>
      </Fragment>
    );
  }
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

export default Home;
