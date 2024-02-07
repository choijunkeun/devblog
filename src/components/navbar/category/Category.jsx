import { useEffect } from "react";
import styles from "./Category.module.css";
import { Link } from "react-router-dom";

const Category = ({ category, categories }) => {

    useEffect(()=> {
        console.log("Category");
    }, [])
    return (
        <li>
            <Link
                key={category.id}
                className={styles.categoryList}
                to={`/posts?tag=${category.key}`}
            >
                {category.name}<span>ㆍ({category.postCount})</span>
            </Link>
        </li>
    );
};

export default Category;
