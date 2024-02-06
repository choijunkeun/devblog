import { useEffect } from "react";
import styles from "./Category.module.css";
import { Link } from "react-router-dom";

const Category = ({ key, category }) => {
    // list?sort=popular

    return (
        <li>
            <Link
                key={category.key}
                className={styles.categoryList}
                to={`/posts?tag=${category.key}`}
            >
                {category.name}<span>ㆍ({category.postCount})</span>
            </Link>
        </li>
    );
};

export default Category;
