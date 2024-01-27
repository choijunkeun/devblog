import { useParams } from 'react-router-dom'
import styles from './Archive.module.css'
import { useState } from 'react';
import Post from './Post';

const Archive = () => {
    let { category } = useParams();
    console.log("Archive Page");
    console.log(category);


    // category에 맞는 api 호출(실제 게시물들)
    const tempPost = [
        {
            id: 17,
            key: "javascript",
            title : "자바스크립트 기초_1",
            content : "화살표 함수란?어쩌구저쩌구입니다.",
            modifyDate: "June 27, 2023",
        },
        {
            id: 16,
            key: "javascript",
            title : "자바스크립트 기초_1",
            content : "화살표 함수란?어쩌구저쩌구입니다.",
            modifyDate: "June 27, 2023",
        },
        {
            id: 15,
            key: "javascript",
            title : "자바스크립트 기초_1",
            content : "화살표 함수란?어쩌구저쩌구입니다.",
            modifyDate: "June 27, 2023",
        },
        {
            id: 14,
            key: "javascript",
            title : "자바스크립트 기초_1",
            content : "화살표 함수란?어쩌구저쩌구입니다.",
            modifyDate: "June 27, 2023",
        },
        {
            id: 13,
            key: "javascript",
            title : "자바스크립트 기초_1",
            content : "화살표 함수란?어쩌구저쩌구입니다.",
            modifyDate: "June 27, 2023",
        },
        {
            id: 12,
            key: "javascript",
            title : "자바스크립트 기초_1",
            content : "화살표 함수란?어쩌구저쩌구입니다.",
            modifyDate: "June 27, 2023",
        },
        {
            id: 11,
            key: "javascript",
            title : "자바스크립트 기초_1",
            content : "화살표 함수란?어쩌구저쩌구입니다.",
            modifyDate: "June 27, 2023",
        },
        {
            id: 10,
            key: "javascript",
            title : "자바스크립트 기초_1",
            content : "화살표 함수란?어쩌구저쩌구입니다.",
            modifyDate: "June 27, 2023",
        },
        {
            id: 9,
            key: "javascript",
            title : "자바스크립트 기초_1",
            content : "화살표 함수란?어쩌구저쩌구입니다.",
            modifyDate: "June 27, 2023",
        },
        {
            id: 8,
            key: "javascript",
            title : "자바스크립트 기초_1",
            content : "화살표 함수란?어쩌구저쩌구입니다.",
            modifyDate: "June 27, 2023",
        },
        {
            id: 7,
            key: "javascript",
            title : "자바스크립트 기초_1",
            content : "화살표 함수란?어쩌구저쩌구입니다.",
            modifyDate: "June 27, 2023",
        },
        {
            id: 6,
            key: "javascript",
            title : "자바스크립트 기초_1",
            content : "화살표 함수란?어쩌구저쩌구입니다.",
            modifyDate: "June 27, 2023",
        },
        {
            id: 5,
            key: "javascript",
            title : "자바스크립트 기초_1",
            content : "화살표 함수란?어쩌구저쩌구입니다.",
            modifyDate: "June 27, 2023",
        },
        {
            id: 4,
            key: "javascript",
            title : "자바스크립트 기초_2",
            content : "화살표 함수란?어쩌구저쩌구입니다.",
            modifyDate: "June 22, 2023",
        },
        {
            id: 3,
            key: "javascript",
            title : "자바스크립트 기초_3",
            content : "화살표 함수란?어쩌구저쩌구입니다.",
            modifyDate: "June 21, 2023",
        },
        {
            id: 2,
            key: "javascript",
            title : "자바스크립트 기초_4",
            content : "화살표 함수란?어쩌구저쩌구입니다.",
            modifyDate: "June 18, 2023",
        },
        {
            id: 1,
            key: "javascript",
            title : "자바스크립트 기초_5",
            content : "화살표 함수란?어쩌구저쩌구입니다.",
            modifyDate: "June 11, 2023",
        },
    ];

    const [posts, setPosts] = useState(tempPost);

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