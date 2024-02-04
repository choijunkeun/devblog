import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef} from 'react'
import axios from 'axios'
import styles from './PostDetail.module.css'
import { AiOutlineCalendar } from "react-icons/ai";
import MDEditor from '@uiw/react-md-editor';


const PostDetail = () => {
    const {idx} = useParams();
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    console.log("PostDetail()")
    console.log(idx);

    // 특정 스크롤 이동(추후 구현)
    const element = useRef<HTMLDivElement>(null);


    const getPost = async () => {
        const result = await axios.get(`http://localhost:80/post/${idx}`)
        .then((response) => {
            console.log(response.data);
            setPost(response.data);
            setLoading(false);
        })
    };

    useEffect(()=> {
        getPost();
    }, []);

    return (
    <div className={styles.detailWrap}>
        <div className={styles.detailInnerWrap}>
            <div className='detailHeader'>
                <h1 className={styles.detailTitle}>
                    {post.title}
                </h1>
                
                <p className={styles.postDate}>
                    <AiOutlineCalendar />{" "}
                    Feb 4, 2024
                 </p>
            </div>

            <div className={styles.detailContentWrap}>
                <div className={styles.detailSidebar}>
                    <div className={styles.toc}>
                        <div className={styles.tocHeader}>
                            <h4 >On this page</h4>
                        </div>
                        <ul className={styles.tocMenu}>
                            <li><a href='/'>Skill</a></li>
                            {/* <li><a href='/'></a></li> */}
                            {/* <li><a href='/'>리액트 훅이란 -- 내용1</a></li> */}
                        </ul>
                    </div>
                </div>
                <div className={styles.detailContent}>
                <div data-color-mode="light" style={{padding:15}}>
                    <MDEditor.Markdown
                        style={{ padding: 10 }}
                        source={post.content}
                    />
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default PostDetail