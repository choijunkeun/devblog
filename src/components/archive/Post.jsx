import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Post.module.css'
import { AiOutlineCalendar } from "react-icons/ai";


const Post = ({post}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const clickHandler = () => {
    navigate(`${location.pathname}/${post.id}`) // PostDetail
  }

  return (
      <div className={styles.postWrap}>
          <div className={styles.postTitle} onClick={clickHandler}>
              {post.title}
          </div>
          <div className={styles.postDate}>
              <AiOutlineCalendar style={{ fontWeight: 400 }} />{" "}
              {post.modifyDate}
          </div>
          <div className={styles.postContent}> {post.content}</div>
      </div>
  );
}

export default Post


                          