import styles from "./Navbar.module.css";
import Author from "./author/Author";
import Category from "./category/Category";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

import { AiOutlineSetting } from "react-icons/ai"
import axios from "axios";
import { useQuery } from "react-query";

const Navbar = () => {
    const [categories, SetCategories] = useState([]);
    const navigate = useNavigate();

    const getCategories = useQuery("getCategories", ()=> {
        axios.get("http://localhost:80/categories").then((response) => {
            console.log("요청됨");
            // 데이타 전처리
            let resData = response.data;
            let reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
            
            // 특수문자 제거 및 소문자로 치환해서 카테고리 key로 설정
            resData.map((category)=> {
                return category.key = category.name.replace(reg, "").toLowerCase();
            })

            // 카테고리 리스트 set
            console.log("설마");
            SetCategories(resData);
        })
        .catch((error) => {
            console.log("카테고리 에러 : ", error);
        })

    }, { staleTime : 5000 }) 

    useEffect(()=> {
    }, []);

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
