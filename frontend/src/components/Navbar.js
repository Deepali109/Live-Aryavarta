import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 bg-blue-100 transition-all duration-500 py-3">
        <div className="w-full px-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 via-white to-green-700 bg-clip-text text-transparent animate-pulse">
              <Link href="/">ARYAVARTA</Link>
            </div>
            <ul className="hidden md:flex space-x-6 font-semibold text-blue-400">
              <li>
                <a className="hover:border-b-4 border-orange-600 text-orange-600" href="/">
                  Home
                </a>
              </li>
              <li>
                <Link
                  className="hover:border-b-4 hover:border- border-orange-600 text-orange-600"
                  href="#slides_parent"
                >
                  Heritage Sites
                </Link>
              </li>
              <li>
                <Link
                  className="hover:border-b-4 border-blue-400"
                  href="#explore-fiji"
                >
                  Travel With us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:border-b-4 border-blue-400"
                  href="#gallery"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  className="hover:border-b-4 border-green-500 text-green-600"
                  href="#fiji-holyday"
                >
                  Our Pride
                </Link>
              </li>
              <li>
                <Link
                  className="hover:border-b-4 border-green-500 text-green-600"
                  href="#blog"
                >
                  Blog
                </Link>
              </li>
            </ul>
            {/* Login / Signup Buttons */}
            <div className="hidden md:flex space-x-4">
              <Link
                href="/login"
                className="text-green-600 font-medium border border-green-600 px-4 py-1 bg-white rounded hover:bg-green-600 hover:text-white transition"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-orange-500 text-white font-medium px-4 py-1 rounded hover:bg-white hover:text-orange-600 border border-orange-500 transition"
              >
                Signup
              </Link>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden text-white text-xl">
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
