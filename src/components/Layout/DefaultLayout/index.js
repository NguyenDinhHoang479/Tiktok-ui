
import classNames from "classnames/bind";
import style from "./DefaultLayout.module.scss";
import Header from "../components/Header";
import Sidebar from "./Sidebar";


const cx = classNames.bind(style);
const DefaultLayout = ({children}) => {
    return ( 
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
     );
}
 
export default DefaultLayout;