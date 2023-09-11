import Link from 'next/link'
import React from 'react'

async function getUser(id:number){
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()
  return data
}

async function UsersPage({params}:any) {

  const user = await getUser(params.id)
  return (
    <div className="max-w-screen-lg mx-auto p-4">
       <Link href="/" className="text-sm text-gray-800"> {"< Home"} </Link><br/>
      <h1 className="text-3xl font-bold mb-4">Usuario: {user.username}</h1>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h4 className="text-xl  mb-2">Nombre: {user.name}</h4>
        <h5 className="text-lg mb-2">Email: {user.email}</h5>
        <p className="text-lg mb-2">
          Ciudad: <strong>{user.address.city}</strong>
        </p>
        <p className="text-lg mb-2">Teléfono: {user.phone}</p>
        <p className="text-lg mb-2">Sitio web: {user.website}</p>
        <p className="text-lg">Compañía: {user.company.name}</p>
      </div>
    </div>
  );
}

export default UsersPage