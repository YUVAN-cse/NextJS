import Image from "next/image"
const page = () => {

  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
      <Image
        src="https://i.pinimg.com/236x/23/86/e6/2386e644be22394959e098d398598668.jpg"
        alt="About Us"
        width={400}
        height={300}
      />
    </div>
  )
}

export default page