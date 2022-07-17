import { Link } from 'react-router-dom';


const NavBar = () => {
    return (<nav className=" px-2 sm:px-4 py-10">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link to={"/"}>
                <span
                    className="self-center text-xl font-semibold whitespace-nowrap"><strong>SpaceX</strong></span>
            </Link>

            <div className="block w-auto">
                <ul className="flex flex-row space-x-8 mt-0 text-sm font-medium">
                    <li>
                        <Link to={"/"}
                              className="block py-2 pr-4 pl-3 p-0 hover:text-slate-400"
                              aria-current="page">
                            Company
                        </Link>
                    </li>
                    <li>
                        <Link to={"/crew"}
                              className="block py-2 pr-4 pl-3 p-0 hover:text-slate-400">
                            Crew
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>)
};
export default NavBar;