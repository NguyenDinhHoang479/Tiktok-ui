import classNames from "classnames/bind";
import style from "./AccountItem.module.scss";
import maguire from '../../assets/images/Harry_Maguire_England_2022.webp'


const cx = classNames.bind(style);
const AccountItem = () => {
    return <div className={cx("wrapper")}>
         <ul className={cx('list-accout')}>
                        <li className={cx('accout')}>
                           <div className={cx('avatar')}>
                              <img className={cx('img-avatar')} src={maguire} alt="" />
                           </div>
                           <div className={cx("info")}>
                              <div className={cx('info-tiktok')}>
                                 harrymaguire93
                                 <span className={cx('icon-check')}><i className="fa-sharp fa-solid fa-circle-check"></i></span>
                              </div>
                              <div className={cx('info-user')}>Harry Maguire</div>
                           </div>
                        </li>
                        {/* <li className={cx('accout')}>
                           <div className={cx('avatar')}>
                              <img className={cx('img-avatar')} src={maguire} alt="" />
                           </div>
                           <div className={cx("info")}>
                              <div className={cx('info-tiktok')}>
                                 harrymaguire93
                                 <span className={cx('icon-check')}><i className="fa-sharp fa-solid fa-circle-check"></i></span>
                              </div>
                              <div className={cx('info-user')}>Harry Maguire</div>
                           </div>
                        </li>
                        <li className={cx('accout')}>
                           <div className={cx('avatar')}>
                              <img className={cx('img-avatar')} src={maguire} alt="" />
                           </div>
                           <div className={cx("info")}>
                              <div className={cx('info-tiktok')}>
                                 harrymaguire93
                                 <span className={cx('icon-check')}><i className={cx("fa-sharp fa-solid fa-circle-check")}></i></span>
                              </div>
                              <div className={cx('info-user')}>Harry Maguire</div>
                           </div>
                        </li> */}
                     </ul>
    </div>;
}
 
export default AccountItem;