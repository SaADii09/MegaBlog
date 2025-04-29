import React, { useState } from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
    const [imageError, setImageError] = useState(false);

    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    {!imageError ? (
                        <img
                            src={appwriteService.getFilePreview(featuredImage)}
                            alt={title}
                            className="rounded-xl"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className="w-full h-40 bg-gray-200 rounded-xl flex items-center justify-center">
                            <p className="text-gray-500">Image not available</p>
                        </div>
                    )}
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;
