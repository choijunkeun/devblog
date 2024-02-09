import { useEffect } from "react";
import styles from "./Category.module.css";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
    

    useEffect(()=> {
        console.log("Category");
        console.log(category);
    }, [])
    return (
        <li>
            <Link
                key={category.id}
                className={styles.categoryList}
                to={`/posts?tag=${category.tagName}`}
            >
                {category.name}<span>ㆍ({category.postCount})</span>
            </Link>
        </li>
    );
};

export default Category;
