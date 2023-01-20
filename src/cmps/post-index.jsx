import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import {PostList} from "../cmps/post-list.jsx"
import {storySerive} from "../assets/services.js/story-service.js"
import {loadStories} from '../store/story.actions.js'
 
export function PostIndex(){

    const stories = useSelector(storeState => storeState.storyModule.stories)

    useEffect(() => {
        loadStories()
    },[])
    
  return (
    <div><PostList stories={stories}/></div>
  )
}
