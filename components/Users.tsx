"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { user } from '@/types/common'

function Users({users}:any) {
    const router = useRouter()
  return (
    <ul>
         {users.map((user:user)=>(
          <li key={user.id}
            onClick={() =>{
                router.push(`/users/${user.id}`)
            }}
          >
            <div>
              <h5>{user.id}</h5>
              <p>{user.email}</p>
              <h2>{user.name}</h2>
            </div>
          </li>
        ))}
    </ul>
  )
}

export default Users