import { SearchIcon } from '@heroicons/react/outline'
import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


function Widget() {
    return (
        <div className='mt-2 px-2 col-span-2'>
            <div className='mt-2 flex items-center 
            space-x-2 rounded-full 
            bg-gray-100 p-3'
            >
                <SearchIcon className='w-5 h-5 text-gray-400' />
                <input type="text" placeholder='Search Twitter'
                    className='bg-transparent flex-1 outline-none' />
            </div>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="saurabhnemade"
                options={{ height: 1000 }}
            />
        </div>
    )
}

export default Widget