import React from 'react'
import {logo, home, explore, notification, messages, bookmarks, list, profile, more} from './imports'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='twitter__sidebar'>
        <div className='twitter__sidebar-logo'>
            <img src={logo} alt='logo' />
        </div>
        <div className='twitter__sidebar-container'>
            <div>
                <img src={home} alt='home' />
                <h1>Home</h1>
            </div>  
            <div>
                <img src={explore} alt='home' />
                <h1>Explore</h1>
            </div>  
            <div>
                <img src={notification} alt='home' />
                <h1>Notifications</h1>
            </div>  
            <div>
                <img src={messages} alt='home' />
                <h1>Messages</h1>
            </div>  
            <div>
                <img src={bookmarks} alt='home' />
                <h1>Bookmarks</h1>
            </div>  
            <div>
                <img src={list} alt='home' />
                <h1>List</h1>
            </div>  
            <div>
                <img src={profile} alt='home' />
                <h1>Profile</h1>
            </div>  
            <div>
                <img src={more} alt='home' />
                <h1>More</h1>
            </div>  
            <div>
                <button>Tweet</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
