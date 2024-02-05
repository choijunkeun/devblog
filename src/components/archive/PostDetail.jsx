import { useParams } from 'react-router-dom'
import React, { useState, useEffect, useRef} from 'react'
import axios from 'axios'
import styles from './PostDetail.module.css'
import { AiOutlineCalendar, AiOutlineFolderOpen } from "react-icons/ai";
import MDEditor from '@uiw/react-md-editor';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';


const HeadingElement = ( { node, children } ) => {
    const ref = useRef(null);
    useEffect(() => {
    },[]);
    return React.createElement(node.tagName, { ref }, children);
}

const PostDetail = () => {
    const {idx} = useParams();
    const [post, setPost] = useState({});
    const [refs, setRefs] = useState([]);
    const [loading, setLoading] = useState(true);



    const getPost = async () => {
        const result = await axios.get(`http://localhost:80/post/${idx}`)
        .then((response) => {
            setPost(response.data);
            setLoading(false);
            const mdWrap  = document.getElementById("markdown-wrap");
            const elems = mdWrap.querySelectorAll('h1, h2, h3, h4, h5');
            const elemsList = Array.from(elems);
            setRefs(elemsList);
        });
    };

    useEffect(()=> {
        getPost();
    }, []);

    const scrollToHeading = (element) => {
        element.scrollIntoView({ behavior: "smooth"})
    }

    return (
        <div className={styles.detailWrap}>
            <div className={styles.detailInnerWrap}>
                <div className="detailHeader">
                    <h1 className={styles.detailTitle}>{post.title}</h1>

                    <p className={styles.postDate}>
                        <AiOutlineCalendar /> Feb 4, 2024
                    </p>
                </div>

                <div className={styles.detailContentWrap}>
                    <div className={styles.detailSidebar}>
                        <div className={styles.toc}>
                            <div className={styles.tocHeader}>
                                <h4>On this page</h4>
                            </div>
                            <ul className={styles.tocMenu}>
                                    {
                                        refs.map((ref, index)=> {
                                            return (
                                                <li key={index} onClick={()=> scrollToHeading(ref)}>{ref.innerText}</li>
                                            )
                                        })
                                    }
                            </ul>
                        </div>
                    </div>
                    <div className={styles.detailContent} id="markdown-wrap">
                            <ReactMarkdown 
                                rehypePlugins={ [rehypeRaw, rehypeSanitize] }
                                components={{
                                    h1: HeadingElement,
                                    h2: HeadingElement,
                                    h3: HeadingElement,
                                    h4: HeadingElement,
                                    // h5: HeadingElement,
                                }}>{post.content}
                            </ReactMarkdown>
                        <strong>
                            <div className={styles.detailFooter}>
                                <AiOutlineFolderOpen /> Categories: 
                                <div className={styles.categoryPage}> JavaScript</div>
                            </div>
                        </strong>
                        <div className={styles.pageNation}>
                            <div className={styles.pageNationItem}>Prev</div>
                            <div className={styles.pageNationItem}>Next</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default PostDetail