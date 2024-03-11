/* eslint-disable react/prop-types */
import { Fragment } from "react";
import appWriteService from "../appwrite/configDb";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Fragment>
      <Link to={`/post/${$id}`}>
        <div className="w-full bg-gray-500 rounded-xl p-4">
          <div className="w-full justify-center mb-4">
            <img
              src={appWriteService.getFilePreview(featuredImage)}
              alt={title}
            />
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </Link>
    </Fragment>
  );
};

export default PostCard;
