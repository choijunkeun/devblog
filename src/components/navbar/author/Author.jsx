import styles from './Author.module.css'
import profile from '../../../assets/profile.png'
import { AiOutlineEnvironment, AiFillGithub, AiOutlineMail  } from 'react-icons/ai'

const Author = () => {
  return (
    <div className={styles.authorWrap}>
        <div className={styles.authorImg}>
            <img src={profile} alt="" />
        </div>
        <div className={styles.authorContent}>
            <h3 style={{ fontSize: "1.25em"}}>JunKeun Choi</h3>
            <div style={{ color: "#7a8288"}}>음악과 개발을 좋아합니다</div>
        </div>
        <div>
            <ul className={styles.ahthorBio}>
                <li><AiOutlineEnvironment /> Seoul, Republic of Korea</li>
                <li><AiOutlineMail /> bonawillis@naver.com</li>
                <li><AiFillGithub /><a href='https://github.com/choijunkeun' style={{ textDecorationLine: "none", color: "black"}}> GitHub</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Author