// access

// react
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
// page
import style from "./Header.module.scss"
import images from '../../../../assets/images';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItems';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
// import { EmailIcon, UploadIcon } from '../../../Icons';
import Image from '../../../Image';


const currenUser = true;
const MENU_ITEMS = [
   {
      icon: <i className="fa-light fa-lightbulb"></i>,
      title: 'Trung tâm nhà sáng tạo LIVE',
      to: './live'
   },
   {
      icon: <i className="fa-light fa-a"></i>,
      title: 'Tiếng Việt',
      children: {
         title: 'Ngôn ngữ',
         data: [
            {
               type: 'language',
               code: 'en',
               title: 'English'
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Tiếng Việt'
            }
         ]
      }

   },
   {
      icon: <i className="fa-light fa-question"></i>,
      title: 'Phản hồi và trợ giúp',
      to: './feedback'
   },
   {
      icon: <i className="fa-light fa-keyboard"></i>,
      title: 'Phím tắt trên bàn phím'
   },
   {
      icon: <i className="fa-light fa-moon"></i>,
      title: 'Chế độ tối'
   }
];
const userMenu = [
   {
      icon: <i className="fa-light fa-user"></i>,
      title: 'Xem hồ sơ',
      to: './user'
   },
   {
      icon: <i className="fa-light fa-bookmark"></i>,
      title: 'Yêu thích',
      to: './user'
   },
   
   {
      icon: <i className="fa-sharp fa-light fa-coin-front"></i>,
      title: 'Nhận xu',
      to: './coin'
   },
   
   {
      icon: <i className="fa-light fa-gear"></i>,
      title: 'Cài đặt',
      to: './setting'
   },
   ...MENU_ITEMS,
   {
      icon: <i className="fa-light fa-right-from-bracket"></i>,
      title: 'Đăng xuất',
      to: './logout',
      separate: true,
   },
]
const cx = classNames.bind(style);
const Header = () => {

   const [searchResult, setSearchResult] = useState([]);
   useEffect(() => {
      setTimeout(() => {
         setSearchResult([])
      }, 0)
   }, [])

   const handleMenuChange = (menuItem) => {
      switch (menuItem.type) {
         case 'language':
            break;
         default:
      }
   }


   return (<header className={cx('wrapper')}>
      <div className={cx('inner')}>
         <div className={cx('logo')}>
            <img src={images.logo} alt="tiktok" />
         </div>
         <Tippy
            interactive={true}
            visible={searchResult.length > 0}
            render={attrs => (
               <PopperWrapper>
                  <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                     <h3 className={cx("title-search")}>Tài khoản</h3>
                     <AccountItem />
                  </div>
               </PopperWrapper>
            )}
         >
            <div className={cx('search')}>
               <div className={cx('box-input')}>
                  <input className={cx('input')} type="text" placeholder='Tìm kiếm' />
                  <div className={cx('icon-close')}><i className="fa-sharp fa-solid fa-circle-xmark"></i></div>
               </div>
               <div className={cx("icon-search")}><i className="fa-thin fa-magnifying-glass"></i></div>
            </div>
         </Tippy>

         {/* action */}
         {currenUser ? (
            <div className={cx('action')}>
               <Button outline leftIcon={<i className={cx("fa-light fa-plus")}></i>}>
                  Tải lên
               </Button>
               <Tippy content="Tin nhắn" placement='bottom' trigger='click'>
                  <div className={cx("chat")}>
                     {/* <UploadIcon width='26px' height='26px' ></UploadIcon> */}
                     <i className="fa-thin fa-paper-plane"></i>
                  </div>
               </Tippy>
               <Tippy content="Hộp thư" >
                  <button className={cx("email")}>
                    {/* <EmailIcon width='32px' height='32px' ></EmailIcon> */}
                    <i className="fa-thin fa-envelope-open-text"></i>
                    <div className={cx("emailQuantity")}>10</div>
                  </button>
               </Tippy>
               <Menu
                  items={userMenu}
                  onChange={handleMenuChange}
               >
               <div className={cx("user")}>
                  <Image src = "https://e0.365dm.com/13/09/800x600/robin-van-persie-manchester-crystal-palace-premier-league_3004821.jpg?20130917113837"
                        errImage = "https://baokhanhhoa.vn/file/e7837c02857c8ca30185a8c39b582c03/dataimages/201406/original/images962414_persie.jpg"
                  />
                  {/* <img src={user} alt="user" /> */}
               </div>
               </Menu>
            </div>
         ) : (

            <div className={cx('action')}>
               <Button outline leftIcon={<i className={cx("fa-light fa-plus")}></i>}>
                  Tải lên
               </Button>
               <Button primary to="./login">Đăng nhập</Button>

               <Menu
                  items={MENU_ITEMS}
                  onChange={handleMenuChange}
               >
                  <button className={cx("btn-menu")}>
                     <i className="fa-regular fa-ellipsis-vertical"></i>
                  </button>
               </Menu>
            </div>
         )}
      </div>
   </header>)
}

export default Header;