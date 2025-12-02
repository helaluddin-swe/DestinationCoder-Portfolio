

const Footer = () => {
  return (
    <div className='border-t border-b-gray-400 h-10 px-4 py-4 mb-4'>
      <div className='flex py-4  text-2xl md:text-3xl text-center justify-center'>
        <h3> Made By <span className="text-3xl  font-bold md:text-4xl px-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent ">
           Helal Uddin
          </span> @ {new Date().getFullYear()}</h3>

      </div>
    </div>
  )
}

export default Footer
