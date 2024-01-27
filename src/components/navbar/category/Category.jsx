import styles from "./Category.module.css";
import { Link } from "react-router-dom";

const Category = ({ key, category }) => {
    return (
        <li>
            <Link
                key={category.key}
                className={styles.categoryList}
                to={`/${category.key}`}
            >
                {category.title}<span>ㆍ({category.count})</span>
            </Link>
        </li>
    );
};

export default Category;
