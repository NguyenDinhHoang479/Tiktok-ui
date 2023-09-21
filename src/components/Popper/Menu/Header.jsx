import classNames from 'classnames/bind'
import styles from "./Menu.module.scss"

const cx = classNames.bind(styles)
const Header = ({title, onBack}) => {
    return ( <header className={cx("header")}>
        <button className={cx("btn-back")}>
            <i class="fa-light fa-chevron-left" onClick={onBack}></i>
        </button>
        <h4 className={cx("header-title")}>{title}</h4>
    </header> );
}
 
export default Header;