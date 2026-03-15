import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'] , weight: ['400', '500', '600', '700'] })

const loading = () => {
  return (
    <div className={poppins.className}>loading...</div>
  )
}

export default loading