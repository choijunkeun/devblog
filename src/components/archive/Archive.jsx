import { useParams } from 'react-router-dom'
import styles from './Archive.module.css'
import { useState } from 'react';
import Post from './Post';

const Archive = () => {
    let { category } = useParams(); // url 파라미터 읽기
    console.log(category);

    const [posts, setPosts] = useState([]);

  return (
        <div className={styles.archiveWrap}>
            <h1 className={styles.headerTitle}>카테고릭 제목 들어갈거</h1>
            {
                posts.map((post, index)=> {
                    return <Post post={post}/>

                })
            }
        </div>
  )
}

export default Archive