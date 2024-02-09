import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Post.module.css'
import { AiOutlineCalendar } from "react-icons/ai";


const Post = ({post}) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("post component:: ", post);

  const clickHandler = () => {
    navigate(`/${post.postId}`) // PostDetail
  }

  return (
      <div className={styles.postWrap}>
          <div className={styles.postTitle} onClick={clickHandler}>
              {post.title}
          </div>
          <div className={styles.postDate}>
              <AiOutlineCalendar style={{ fontWeight: 400 }} />{" "}
              {post.date}
          </div>
          {/* <div className={styles.postContent}> {post.content}</div> */}
      </div>
  );
}

export default Post