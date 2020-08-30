import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/0/02/ANZAC_Parade_from_the_Australian_War_Memorial%2C_Canberra_ACT.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/2/2a/User-avatar_Dark.png"
        title="user1"
      />
      <Story image="https://upload.wikimedia.org/wikipedia/commons/b/b9/Canberra_%28AU%29%2C_Commonwealth_Avenue_Bridge_--_2019_--_1811.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/2/2a/User-avatar_Dark.png"
        title="user2"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/7/71/High_Court_of_Australia%2C_ACT_-_perspective_controlled_1.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/2/2a/User-avatar_Dark.png"
        title="user3"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/a/a9/National_Carillon%2C_Canberra_ACT.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/2/2a/User-avatar_Dark.png"
        title="user4"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/9/9a/National_Gallery_from_SW%2C_Canberra_Australia.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/2/2a/User-avatar_Dark.png"
        title="user5"
      />
    </div>
  )
}

export default StoryReel
