import classNames from "classnames/bind";
import style from "./Sidebar.module.scss";

const cx = classNames.bind(style);
const Sidebar = () => {
    return <aside className={cx('wrapper')}>sidebar</aside>
}
 
export default Sidebar;