import React from 'react'

export default async function page({params}) {
  const {username} = await params
  return (
    <div>username - {username}</div>
  )
}
