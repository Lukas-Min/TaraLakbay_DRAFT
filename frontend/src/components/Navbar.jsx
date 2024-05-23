import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-nowrap'>
            <span className='text-slate-500'>Tara</span>
            <span className='text-slate-700'>Lakbay</span>
          </h1>
        </Link>
        <form className='bg-slate-100 p-2 rounded-lg flex items-center' action="">
          <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-36 sm:w-64' />
          <FaSearch className='text-slate-600 cursor-pointer'></FaSearch>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden text-nowrap cursor-pointer sm:inline text-slate-700 hover:underline'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='hidden text-nowrap cursor-pointer sm:inline text-slate-700 hover:underline'>About</li>
          </Link>
          <Link to='/sign-in'>
            <li className='hidden text-nowrap cursor-pointer sm:inline text-slate-700 hover:underline'>Sign In</li>
          </Link>
          <Link to='/sign-up'>
            <li className='hidden text-nowrap cursor-pointer sm:inline text-slate-700 hover:underline'>Sign Up</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}

export default Navbar