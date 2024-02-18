import React from 'react'
import './dropdownMenu.css'
import { signOut, useSession } from 'next-auth/react';

function dropdownMenu() {

    const session  = useSession()

  return (
    <div  className="absolute z-50 top-5 right-5">
        <label className="popup">
    <input type="checkbox" />
    <div className="burger" tabIndex={0}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <nav className="popup-window z-50">
      <legend>Actions</legend>
      <ul>
        
        <li>
        {session ?
          <a>
            <svg strokeLinejoin="round" stroke-linecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle r="4" cy="7" cx="9"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>{session?.data?.user?.name}</span>
          </a>
         : 
        
        <a href="/login">
          <svg strokeLinejoin="round" stroke-linecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle r="4" cy="7" cx="9"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>Login</span>
        </a>
        }
      </li>

        <li>
          <a>
            <svg strokeLinejoin="round" stroke-linecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            <span>Magic Link</span>
          </a>
        </li>
        <hr />
        <li>
          <a>
            <svg strokeLinejoin="round" stroke-linecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
              <rect ry="2" rx="2" height="13" width="13" y="9" x="9"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Clone</span>
          </a>
        </li>
        <li>
          <a>
            <svg strokeLinejoin="round" stroke-linecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
              <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
            </svg>
            <span>Edit</span>
          </a>
        </li>
        <hr />{ session ? <li>
            <a onClick={() => signOut()}>
            <svg fill="#ff0000" viewBox="-5 -3 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-log-out" height="14" width="14" stroke="#ff0000" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3.414 7.828h5.642a1 1 0 1 1 0 2H3.414l1.122 1.122a1 1 0 1 1-1.415 1.414L.293 9.536a.997.997 0 0 1 0-1.415L3.12 5.293a1 1 0 0 1 1.415 1.414L3.414 7.828zM13 0a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1z"></path></g></svg>                <span>Log out</span>
            </a>
            </li> : null}
            
        </ul>
    </nav>
  </label>
  </div>
  )
}

export default dropdownMenu