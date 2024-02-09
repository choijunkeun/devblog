import { useParams } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import styles from './PostDetail.module.css'
import { AiOutlineCalendar, AiOutlineFolderOpen } from "react-icons/ai";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';

/**
 * @description state 무한참조를 해결하지 못해 querySelectorAll로 구현해놓음(사용X)
 */
// const Heading = ({ node, children }) =>  {
//     const ref = useRef(null);
//     return React.createElement(node.tagName, { ref }, children);
// }

const PostDetail = () => {
    const {idx} = useParams();
    const [post, setPost] = useState({});
    const [refs, setRefs] = useState([]);

    const observer = useRef();

    // making..
    const [loading, setLoading] = useState(true);

    // 게시글 조회
    const fetchPost = async () => {
        await axios.get(`http://localhost:80/post/${idx}`)
        .then((response) => {
            setPost(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const setHeadScroll = () => {
        const container = document.getElementById('markdown-container');
        const headElem = container.querySelectorAll('h1, h2, h3, h4, h5');
        setRefs(Array.from(headElem));
    }

    useEffect(() => {
        console.log("postDetail")
        fetchPost();
    }, []);

    useEffect(()=> {
        setHeadScroll();
    },[post]);

    // 뷰포트감지
    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    highlightSection(entry.target);
                }
            });
        }, { threshold: 0.1 }); // 요소 10% 화면에 보일 때 감지

        refs.forEach((ref) => observer.current.observe(ref));

        return ()=> {
            refs.forEach((ref) => observer.current.unobserve(ref));
        }
    }, [refs]);

    const highlightSection = (viewElement) => {
        console.log(viewElement);

    }

    // Toc 버튼 이벤트
    const scrollToHeading = (element) => {
        element.scrollIntoView({ behavior: "smooth"})
    }

    return (
        <div className={styles.detailWrap}>
            <div className={styles.detailInnerWrap}>
                <div className="detailHeader">
                    <h1 className={styles.detailTitle}>{post.title}</h1>
                    <p className={styles.postDate}>
                        <AiOutlineCalendar /> {post.date}
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
                                            let stylePedLeft = "";
                                            switch (ref.tagName.toLowerCase()) {
                                                case "h2":
                                                    stylePedLeft = "1em";
                                                    break;
                                                case "h3":
                                                    stylePedLeft = "1.75em";
                                                    break;
                                                case "h4":
                                                    stylePedLeft = "2.5em";
                                                    break;
                                                case "h5":
                                                    stylePedLeft = "3.25em";
                                                    break;
                                                default:
                                                    break;
                                            }
                                            return (
                                                <li key={index} style={{ paddingLeft: stylePedLeft }} onClick={()=> scrollToHeading(ref)}>{ref.innerText}</li>
                                            )
                                        })
                                    }
                            </ul>
                        </div>
                    </div>
                    <div className={styles.detailContent} id="markdown-container">
                            <ReactMarkdown
                                rehypePlugins={ [rehypeRaw, rehypeSanitize] }
                                remarkPlugins={ [remarkGfm] }
                                components={{
                                    // h1: (props) => <Heading {...props} setRefs={setRefs} />,
                                    img: ({node, ...props}) => <img style={{maxWidth: '100%'}}{...props} alt=""/>,
                                    code({node, inline, className, children, ...props}) {
                                        const match = /(\s*)/g.exec(className || '');
                                        return !inline && match ? (
                                            <SyntaxHighlighter 
                                                {...props}
                                                PreTag="div" 
                                                children={String(children).replace(/\n$/, '')}
                                                language={match[1]} 
                                            />
                                        ) : (
                                          <code className={className} {...props}>
                                            {children}
                                          </code>
                                        )
                                      }
                                    }}>{post.content}           
                            </ReactMarkdown>
                        <div className={styles.detailFooter}>
                            <AiOutlineFolderOpen /> Categories: 
                            <div className={styles.categoryPage}> Java</div>
                            <div className={styles.pageNation}>
                                <div className={styles.pageNationItem}>Prev</div>
                                <div className={styles.pageNationItem}>Next</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}



export default PostDetail