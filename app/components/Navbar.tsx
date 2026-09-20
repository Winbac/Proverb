export default function Navbar() {
  return (
    <div className="lg:pt-5">
      <div className="navbar shadow-sm px-10 bg-white lg:rounded-4xl lg:w-11/12 lg:mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>

          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-8 px-1 font-heading text-sm font-semibold ">
            <li>
              <a className="group block py-2 text-body transition-colors hover:text-heading cursor-pointer">
                Home
                <span className="mx-auto mt-0.5 block h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>

            <li>
              <a className="group block py-2 text-body transition-colors hover:text-heading cursor-pointer">
                About Us
                <span className="mx-auto mt-0.5 block h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
            <li>
              <a className="group block py-2 text-body transition-colors hover:text-heading cursor-pointer">
                Services
                <span className="mx-auto mt-0.5 block h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
            <li>
              <a className="group block py-2 text-body transition-colors hover:text-heading cursor-pointer">
                Industries We Serve
                <span className="mx-auto mt-0.5 block h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>

            <li>
              <a className="group block py-2 text-body transition-colors hover:text-heading cursor-pointer">Contact Us
                                <span className="mx-auto mt-0.5 block h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />

              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <a className="btn btn-primary">Book Instant Call</a>
        </div>
      </div>
    </div>
  );
}
