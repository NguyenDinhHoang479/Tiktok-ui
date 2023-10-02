import classNames from "classnames/bind";
import style from "./AccountItem.module.scss";
import { Link } from "react-router-dom";
import Image from '../Image'


const cx = classNames.bind(style);
const AccountItem = ({data}) => {
    return <Link to={`/@/:${data.nickname}`} className={cx("wrapper")}>
         {/* <ul className={cx('list-accout')}> */}
                        <li className={cx('accout')}>
                           <div className={cx('avatar')}>
                              <Image className={cx('img-avatar')} src={data.avatar} alt="" />
                           </div>
                           <div className={cx("info")}>
                              <div className={cx('info-tiktok')}>
                                 {data.nickname}
                                 <span className={cx('icon-check')}>
                                   {data.tick ?  <i className="fa-sharp fa-solid fa-circle-check"></i> : null }
                                 </span>
                              </div>
                              <div className={cx('info-user')}>{data.full_name}</div>
                           </div>
                        </li>
                        
                     {/* </ul> */}
    </Link>;
}
 
export default AccountItem;