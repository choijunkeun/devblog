import styles from "./Navbar.module.css";
import Author from "./author/Author";
import Category from "./category/Category";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

import { AiOutlineSetting } from "react-icons/ai"
import axios from "axios";

const Navbar = () => {
     // nav바 카테고리 정보 가져오기
     const categoryItem = [
        { key: "all", title: "ALL", count: 3 },
    ];

    const [categories, SetCategories] = useState(categoryItem);
    const navigate = useNavigate();

    const getCategories = async () => {
        await axios.get("http://localhost:80/categories")
        .then((response) => {
            console.log(response);

            let cateCopy = [...categories, ...response];
            SetCategories(cateCopy);
        })
        .catch((error) => {
            console.log("카테고리 불러오기 중 에러 발생 : ", error);
        })
    }

    useEffect(()=> {
        getCategories();
    })

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
