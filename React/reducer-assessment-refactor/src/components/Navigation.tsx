import { Link } from "react-router";

function Navigation() {
  return (
    <header className="m-5 bg-sky-100 rounded-2xl shadow-md">
      <nav className="flex justify-between h-16 items-center  px-5">
        <div className="text-xl font-medium text-sky-600">Customer Item Manager</div>
        <ul className="hidden md:flex space-x-5 text-gray-600 hover:text-gray-900">
          <Link to='/' className=" text-gray-600 hover:text-gray-900  hover:cursor-pointer">
            Dashborad
          </Link>
          <Link to='/add' className="text-gray-600 hover:text-gray-900 hover:cursor-pointer">
            Add
          </Link>
          <Link to='/update' className="text-gray-600 hover:text-gray-900 hover:cursor-pointer">
            Update
          </Link>
          <Link to='/delete' className="text-gray-600 hover:text-gray-900 hover:cursor-pointer">
            Delete
          </Link>
          
        </ul>
      </nav>
    </header>
  );
}

export default Navigation
