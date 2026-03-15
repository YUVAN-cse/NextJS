import React from 'react'

const page = async({params}) => {
    const {username} = await params
    console.log(username)
  return (
    <>
    <div>this page exists username - {username[0]}</div>
    <div>this page exists id - {username[1]}</div>
    </>
  )
}

export default page