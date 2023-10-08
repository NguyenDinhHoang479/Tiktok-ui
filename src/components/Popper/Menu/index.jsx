import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind'
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../../Popper';

import Menuitem from './Menuitems';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultfn = {}
const Menu = ({ children, items = [], hideOnClick = false, onChange = defaultfn }) => {
   const [history, setHistory] = useState([{data: items}]);
   const current = history[history.length - 1];
   const renderItems = () => {
      return current.data.map((item, index) =>{ 
         const isParent = !!item.children
         return <Menuitem key={index} data={item} onClick={
            ()=>{
               if(isParent) {
                  setHistory((prev)=>[...prev, item.children])
               }else{
                  onChange(item)
               }
            }
         }></Menuitem>
      })
   }
   
   return (
      <Tippy
      placement='bottom-start'
         interactive={true}
         //   visible
         offset={[12, 8]}
         hideOnClick = {hideOnClick}
         delay={[0, 500]}
         render={(attrs) => (
            <PopperWrapper>
               {history.length > 1 ? <Header title="Language" onBack={()=>{
                  setHistory((prev)=>prev.slice(0, prev.length - 1))
               }}/> : null}
               <ul className={cx('menu-items')}>
               {renderItems()}
               </ul>
            </PopperWrapper>
         )}
         onHide={()=> setHistory((prev)=>prev.slice(0, 1))}
      >
         {children}
      </Tippy>
   );
}

export default Menu;