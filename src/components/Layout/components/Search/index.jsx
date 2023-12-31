import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';


import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItems';
import style from './Search.module.scss';
import { SearchIcon } from '../../../Icons';
import { useDebounce } from '../../../../hooks';
import * as searchService from '../../../../apiServer/searchService';

const cx = classNames.bind(style);
const Search = () => {
   const [searchValue, setSearchValue] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [showSearchResult, setShowSearchResult] = useState(true);
   const [loading, setLoading] = useState(false);
   const debounce = useDebounce(searchValue, 500)

   const inputRef = useRef()
   useEffect(() => {
      if(!debounce.trim()){
         setSearchResult([])
         return
      }

      const fetchApi = async () => {
         setLoading(true)

         const result = await searchService.search(debounce)
         setSearchResult(result)

         setLoading(false)
      } 
      fetchApi()
   }, [debounce])

   const handleHideSearchResult = () => {
      setShowSearchResult(false)
   }
   const handleChanges = (e) => {
      const searchValue = e.target.value;
      if(!searchValue.startsWith(' ')){
         setSearchValue(searchValue) 
      }

   }
   
   return (
      <Tippy
      interactive={true}
      appendTo={()=>document.body}
         visible={showSearchResult && searchResult.length > 0}
         render={attrs => (
            <PopperWrapper>
               <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                  <h3 className={cx("title-search")}>Tài khoản</h3>
                  {searchResult.map((item)=>(
                     <AccountItem key={item.id} data = {item}/>
                  ))}
               </div>
            </PopperWrapper>
         )}
         onClickOutside={handleHideSearchResult}
      >
         <div className={cx('search')}>
            <div className={cx('box-input')}>
               <input
                  ref={inputRef}
                  value={searchValue}
                  className={cx('input')}
                  type="text"
                  placeholder='Tìm kiếm'
                  onChange={handleChanges}
                  onFocus={()=>{setShowSearchResult(true)}}
                  />
               {!!searchValue && !loading ?
                  <div className={cx('icon-close')} onClick={() => {
                     setSearchValue('')
                     inputRef.current.focus()
                  }}>
                     <i className={cx("fa-sharp fa-solid fa-circle-xmark")}></i>
                  </div> : null
               }
               {loading ? 
                  <div className={cx('icon-loading')}>
                     <i className={cx("fa-regular fa-spinner")}></i>
                  </div>
               : null}
               
               
            </div>
            <div className={cx("icon-search")} onMouseDown={(e)=>(e.preventDefault())}><SearchIcon></SearchIcon></div>
         </div>
      </Tippy>
   );
}

export default Search;