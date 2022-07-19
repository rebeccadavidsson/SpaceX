import { Links } from '../../features/company/types';
import Socials from './Socials';
import { Link } from 'react-router-dom';

const Footer = ({links}: { links?: Links }) => {
    return (
        <footer className="p-4 md:px-8 md:py-12" data-cy="footer">
            <div className="sm:flex sm:items-center sm:justify-between container">
                <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 ">
                    <li>
                        <Link to="/">
                            <span className="mr-4 md:mr-6 hover:text-slate-400">Company</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/crew">
                            <span className="mr-4 hover:text-slate-400 md:mr-6">Crew</span>
                        </Link>
                    </li>
                </ul>
                <Socials links={links}/>
            </div>
        </footer>
    );
}
export default Footer;