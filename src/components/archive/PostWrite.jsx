import React, { useState, useEffect } from "react";
import styles from "./PostWrite.module.css";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import axios from 'axios';

const PostWrite = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: "",
        contents: "",
    });
    const [mdText, setMdText] = useState(); // markdown 텍스트 스테이트

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
      // const config = {"Content-Type": 'application/json'};
      await axios.post(`http://localhost:80/post`, JSON.stringify(post), { headers: { 'Content-Type': 'application/json' } })
          .then((response)=> {
            console.log("저장됨")
            return response.data;
          })
          .catch((error) => {
            console.log("error :: ", error);
          })
        // return data;
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
                <div className={styles.mdSave}>
                    <button className={styles.mdSaveBtn} onClick={savePost}>
                        작성하기
                    </button>
                </div>
            </div>
            <MDEditor
                height={"100%"}
                value={mdText}
                onChange={setMdText}
            ></MDEditor>
        </div>
    );
};

export default PostWrite;
