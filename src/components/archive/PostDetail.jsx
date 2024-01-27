import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef} from 'react'
import axios from 'axios'
import styles from './PostDetail.module.css'
import { AiOutlineCalendar } from "react-icons/ai";


const PostDetail = () => {
    const {category, idx} = useParams();
    const {post, setPost} = useState({});
    const {loading, setLoading} = useState(true);
    console.log("PostDetail()")
    console.log(category);
    console.log(idx);

    // 특정 스크롤 이동(추후 구현)
    const element = useRef<HTMLDivElement>(null);


    const getPost = async () => {
        const result = await axios.get(`//localhost:8080/post/${idx}`)
        .then((response) => {
            setPost(response.data);
            setLoading(false);
        })
    };

    useEffect(()=> {
        // getPost();
    }, []);

    return (
    <div className={styles.detailWrap}>
        <div className={styles.detailInnerWrap}>
            <div className='detailHeader'>
                <h1 className={styles.detailTitle}>
                    [React] React Hook(리액트 훅) -- 제목
                </h1>
                
                <p className={styles.postDate}>
                    <AiOutlineCalendar />{" "}
                    April 4, 2023 -- 날짜
                 </p>
            </div>

            <div className={styles.detailContentWrap}>
                <div className={styles.detailSidebar}>
                    <div className={styles.toc}>
                        <div className={styles.tocHeader}>
                            <h4 >On this page</h4>
                        </div>
                        <ul className={styles.tocMenu}>
                            <li><a href='/'>리액트 훅이란 -- 내용1</a></li>
                            <li><a href='/'>리액트 훅이란 -- 내용1</a></li>
                            <li><a href='/'>리액트 훅이란 -- 내용1</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.detailContent}>
                    세부내용
                </div>

            </div>
        </div>
    </div>
  )
}

export default PostDetail