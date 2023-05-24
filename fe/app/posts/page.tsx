'use client'
import { usePosts } from '@/context/posts'
import React from 'react'
import Navbar from '../component/layout/Navbar'
import HorizontalSwipePostPage from './main-posts-horizontal-swipe'
import MainPostsOfPageWithDescriptionAndPosts from './main-posts-vertical-swipe/mainWithDescriptionAndPost'



const Posts = () => {
  const postsContext = usePosts();
  return (
      <Navbar>
        {postsContext.isPageWithDescription ? <MainPostsOfPageWithDescriptionAndPosts/> : <HorizontalSwipePostPage/>}
      </Navbar>
  )
}

export default Posts