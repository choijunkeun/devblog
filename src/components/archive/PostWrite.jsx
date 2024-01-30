import React, { useState, useEffect } from "react";
import styles from "./PostWrite.module.css";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import axios from 'axios';
import styled from "styled-components";
import Tag from "./Tag";

const PostWrite = () => {
    const navigate = useNavigate();

    const [post, setPost] = useState({
        title: "",
        contents: "",
    });
    const [mdText, setMdText] = useState(); // markdown 텍스트 스테이트
    const [tagList, setTagList] = useState([]); // 카테고리 리스트

    useEffect(() => {
        let postCopy = { ...post };
        postCopy.contents = mdText;
        setPost(postCopy);
    }, [mdText]);

    const changePost = (event) => {
        let title = event.target.value;
        let copy = { ...post };
        copy.title = title;
        setPost(copy);
    };

    const savePost = async (e) => {
      e.preventDefault();
      await axios.post(`http://localhost:80/post`, JSON.stringify(post), { headers: { 'Content-Type': 'application/json' } })
          .then((response)=> {
            console.log("저장됨")
            return response.data;
          })
          .catch((error) => {
            console.log("error :: ", error);
          })
    };

    return (
        <div className={styles.mdWrap} data-color-mode="light">
            <div className={styles.mdTitleWrap}>
                <div className={styles.mdTitleInput}>
                    <label for="title">
                        <span>* </span>제목
                    </label>
                    <input
                        type="text"
                        id="title"
                        placeholder="제목을 입력해주세요"
                        value={post.title}
                        onChange={changePost}
                    />
                </div>
                <div className={styles.mdBtn}>
                    <Button color={"white"} onClick={savePost}>작성하기</Button>
                    <Button onClick={()=> navigate(-1)}>나가기</Button>
                </div>
            </div>
            <Tag tagList={tagList} setTagList={setTagList} />
            <MDEditor
                height={"100%"}
                value={mdText}
                onChange={setMdText}
            ></MDEditor>
        </div>
    );
};

// styled components 
const Button = styled.button`
    width: 5em;
    font-family: "Cafe24Moya";
    font-size: 1.5em;
    font-style: italic;
    border-radius: 8px;
    line-height: 1.5;
    cursor: pointer;
    margin: 1px;
    background: ${props => props.color || `#cc7171`};
`;

export default PostWrite;
