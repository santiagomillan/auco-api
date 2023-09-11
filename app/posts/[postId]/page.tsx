import { commentInterface, user } from '@/types/common'
import Link from 'next/link'
import React from 'react'

async function  fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return data
  }
  
  async function  getPost(id:number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
  }

  async function  getCommentsPost(id:number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    const data = await res.json()
    return data
  }

  

async function PropPage({params}:any) {
    const post = await getPost(params.postId)
    const users = await fetchUsers()
    const comments =await getCommentsPost(params.postId);

    const author = users.find((user :user) => user.id === post.userId);
    const postId = parseInt(params.postId, 10);
    const nextPostId = postId + 1;
    const prevPostId = postId - 1;
return (
    <div className="max-w-2xl mx-auto p-4">
        <Link href="/" className="text-sm text-gray-800"> {"< Home"} </Link><br/>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg text-gray-700 mb-2">Author: <Link href={`/users/${author.id}`}>{author.name}</Link></p>
      <p className="text-lg text-gray-800 leading-relaxed mb-4">{post.body}</p>
      <h2 className="text-xl font-semibold mb-2">Comments:</h2>
      {comments.map((comment :commentInterface) => (
        <div key={comment.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h3 className="text-lg font-medium" >{comment.email}</h3>
          <p className="text-gray-700 mt-2">{comment.body}</p>
        </div>
      ))}

    <div className="text-center">
        {prevPostId >= 1 ? (
          <Link href={`/posts/${prevPostId}`} className="mr-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
              Post Anterior
          </Link>
        ) : null}

        {nextPostId <= 100 ? (
          <Link href={`/posts/${nextPostId}`}className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
              Siguiente Post
          </Link>
        ) : (
          <p>No hay más posts</p>
        )}
      </div>


    </div>
  );
}

export default PropPage