import React from 'react';
import {PropsPost} from "../types/Types";
import {Link} from "react-router-dom";


const Post = ({post}: PropsPost) => {
    return (
        <div className='post'>
                <p className='title'><b>№{post.id}</b> {post.title}</p>
                <p>{post.body}</p>
            <div className='btnDisplay'>
                <Link to={`/post/?data=${encodeURIComponent(post.id)}`}>
                    <button>Подробнее</button>
                </Link>
            </div>
        </div>
    );
};

export default Post;