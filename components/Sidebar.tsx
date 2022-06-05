import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon,
    DotsCircleHorizontalIcon
}from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>
        <img className='m-3 h-10 w-10' src="https://links.papareact.com/drq"/>
        <SidebarRow Icon={HomeIcon} title='name'/>
        <SidebarRow Icon={HashtagIcon} title='Explore'/>
        <SidebarRow Icon={BellIcon} title='Notification'/>
        <SidebarRow Icon={MailIcon} title='Message'/>
        <SidebarRow Icon={BookmarkIcon} title='BookMarks'/>
        <SidebarRow Icon={CollectionIcon} title='Lists'/>
        <SidebarRow Icon={UserIcon} title='Sign In'/>
        <SidebarRow Icon={DotsCircleHorizontalIcon} title='More'/>
    </div>
  )
}

export default Sidebar