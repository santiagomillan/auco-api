import React from 'react'
import Users from '@/components/Users'
import Posts from '@/components/Posts'

async function  fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  return data
}

async function  fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()
  return data
}

async function HomePage() {
  const users = await fetchUsers()
  const posts = await fetchPosts()
  return (
    <div>
      <Posts posts={posts} users={users}/>
    </div>
  )
}

export default HomePage
