"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import ScrollToTopButton from './Scroll';
import { postInterface, user } from '@/types/common';

function Posts({posts , users}:any) {
    const router = useRouter()
    const postsWithAuthorNames = posts.map((post :postInterface) => {
        const author = users.find((user :user) => user.id === post.userId);
        return {
          ...post,
          authorName: author ? author.name : `Autor ${post.userId}`,
        };
      });
    return (
        <div className="max-w-screen-lg mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {postsWithAuthorNames.map((post :postInterface) => (
            <div
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden p-4 cursor-pointer"
                onClick={() => {
                router.push(`/posts/${post.id}`)
                }}
            >
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-800 mt-2">{post.body.slice(0, 90)}...</p>
                <p className="text-gray-400 mt-2">Autor: {post.authorName}</p>
            </div>
            ))}
        </div>
        <ScrollToTopButton/> 
        </div>
        
    )
}

export default Posts
