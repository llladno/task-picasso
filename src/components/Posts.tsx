import React, {useEffect, useState} from 'react';
import axios from "axios";
import Post from "./Post";
import {PostType} from "../types/Types";

const Posts: React.FC = () => {
    const [Page, setPage] = useState<number>(1)

    const [getting, setGetting] = useState<boolean>(true)

    const [posts,
        setPosts] = useState<PostType[] | []>([])

    useEffect(() => {
        if(getting){
            axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${Page}`)
                .then(resp =>{
                    setPosts([...posts,...resp.data])
                    setPage(state => state + 1)
                }).finally(()=> setGetting(false))
        }
        document.addEventListener('scroll',scrollFn)
        return () =>{
            document.removeEventListener('scroll', scrollFn)
        }
    }, [getting,Page,posts])


    function scrollFn(e:any){
        if(e.target.documentElement.scrollHeight -
            (e.target.documentElement.scrollTop + window.innerHeight) < 100) setGetting(true)
    }

    return (
        <div>
            {posts.length === 0 ? <h1>Загрузка</h1>
                : <div className='displayPosts'>
                    {posts?.map((post:PostType) => (
                        <Post key={post.id} post={post}></Post>
                    ))}
                </div>
            }
        </div>
    );
};

export default Posts;