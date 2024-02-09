import { useParams, useSearchParams } from 'react-router-dom'
import styles from './Archive.module.css'
import { useEffect, useState } from 'react';
import Post from './Post';
import axios from 'axios';

const Archive = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const param = searchParams.get("tag");
    const page = 0;

    const getPosts = async () => {
        await axios.get(`http://localhost:80/posts?tag=${param}&page=${page}`).then((response)=> {
            setPosts(response.data.content);
        }).catch(error => console.log(error))
    }

    useEffect(()=> {
        getPosts();
        console.log("Archive")
    },[param])

  return (
        <div className={styles.archiveWrap}>
            <h1 className={styles.headerTitle}> {param} </h1>
            {
                posts.map((post, index)=> {
                    return <Post post={post}/>
                })
            }
        </div>
  )
}

export default Archive