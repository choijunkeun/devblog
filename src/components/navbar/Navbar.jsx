import styles from "./Navbar.module.css";
import Author from "./author/Author";
import Category from "./category/Category";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import { AiOutlineSetting } from "react-icons/ai"

const Navbar = () => {
     // nav바 카테고리 정보 가져오기
     const tempCateItem = [
        { key: "all", title: "ALL", count: 102 },
        { key: "html", title: "HTML", count: 7 },
        { key: "css", title: "CSS", count: 5 },
        { key: "javascript", title: "JavaScript", count: 13 },
        { key: "react", title: "React", count: 9 },
        { key: "java", title: "JAVA", count: 28 },
        { key: "spring", title: "Spring", count: 22 },
        { key: "spring-data-jpa", title: "Spring Data JPA", count: 18 },
    ];

    const [categories, SetCategories] = useState(tempCateItem);
    const navigate = useNavigate();

    const btnWritePage = () => {
        navigate("/write"); 
    }

    return (
        <div className={styles.navbarWrap}>
            <div className={styles.navbarWrapInner}>
                <div className={styles.navbarContents}>
                    <Author />
                    <div className={styles.categoryWrap}>
                        <span className={styles.categoryTitle}>
                            Category <AiOutlineSetting onClick={ btnWritePage }/>
                        </span>
                        <ul>
                            {
                                categories.map((category, index) => {
                                    return <Category key={category.id} category={category} />;
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
