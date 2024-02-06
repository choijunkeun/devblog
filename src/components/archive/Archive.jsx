import { useParams, useSearchParams } from 'react-router-dom'
import styles from './Archive.module.css'
import { useState } from 'react';
import Post from './Post';

const Archive = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const param = searchParams.get("tag");

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