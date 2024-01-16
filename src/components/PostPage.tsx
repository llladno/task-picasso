import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import axios from "axios";
import {PostType} from "../types/Types";

const PostPage = () => {
    const location = useLocation();
    const searchData = new URLSearchParams(location.search);
    const receivedData: string | null = searchData.get('data');

    const [post,
        setPost] = useState<PostType | undefined>(undefined)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${receivedData}`)
            .then(resp => setPost(resp.data))
    }, [receivedData])

    return (
        <div>
            {!post ? <h1>Загрузка</h1> :
                <div className='onePost'>
                    <div>
                        <h1>{post?.title}</h1>
                        <p><b>Описание:</b> {post?.body}</p>
                        <button onClick={()=> window.location.href = '/'}>Назад</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default PostPage;