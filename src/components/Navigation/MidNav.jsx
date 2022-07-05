import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Menu, Space } from 'antd';
import 'antd/dist/antd.css';
import './navbar.css'

const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <>
                Login
            </>
          ),
        },
        {
          key: '2',
          label: (
            <>
              Signup
            </>
          ),
        }
      ]}
    />
  );

export const MidNav = () => {

    const handleClick = () => {
        console.log("hello");
    }

    return (
        <div className='midnavContainer'>
            <ul className='midnav'>
                <li> <Link to={'/women'}>WOMEN</Link> </li>
                <li> <Link to={'/men'}>MEN</Link> </li>
                <li> <Link to={'kids'}>KIDS</Link> </li>
                <li> <Link to={'/'}>HOME</Link> </li>
            </ul>

            <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAAAoCAYAAACviSv9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjlERTQwMzA0RDMxMUU4QkMzMEM1QjQzQzhFRDQzNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjlERTQwNDA0RDMxMUU4QkMzMEM1QjQzQzhFRDQzNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyOURFNDAxMDREMzExRThCQzMwQzVCNDNDOEVENDM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyOURFNDAyMDREMzExRThCQzMwQzVCNDNDOEVENDM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+V8uSHwAACLJJREFUeNrsXQlsFVUU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" alt="" /></div>


            <ul className='midnav'>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fillRule="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg></li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fillRule="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg></li>

                <Dropdown overlay={menu}>
                        <Space>
                            <li onClick={() => handleClick()} ><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fillRule="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg></li>
                        </Space>         
                </Dropdown>



                <li><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fillRule="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg></li>
            </ul>

        </div>

    )
}
