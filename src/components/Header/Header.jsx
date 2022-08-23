import { Link } from 'react-router-dom';
import './header.css';
import { AiFillHome } from 'react-icons/ai';
import { IoSettings,IoNotifications } from 'react-icons/io5';
import { TbWritingSign } from 'react-icons/tb';
import { FaUserAlt } from 'react-icons/fa';
import Darkmode from '../DarkMode/Darkmode';

const Header = () => {
    const isConnected = window.sessionStorage.getItem('user');
    return(
        <>
        {
            isConnected ?
        <div className="header">
            <Link to="/" className="lolink"><h2 className="logo">MicroBlog</h2></Link>
            <div className="contr">
                <li className="cids">
                    <Link to="/"><AiFillHome  className="iconNav"/></Link>
                </li>
                <li className="cids">
                    <Link to="/write-post"><TbWritingSign className="iconNav"/></Link>
                </li>
                <li className="cids">
                    <Link to="/my-posts"><FaUserAlt className="iconNav" /></Link>
                </li>
                <li className="cids">
                    <Link to="/settings"><IoSettings className="iconNav"/></Link>
                </li>
            </div>
            <div className="leftNav">
                <Darkmode />
                <input type="text" className="searchNav" placeholder="Search posts"/>
                <p className="profimg">

                </p>
            </div>
        </div>
        :
            <div className="header">
                <Link to="/" className="lolink"><h2 className="logo">MicroBlog</h2></Link>
                <div className="leftNav">
                    <Darkmode />
                </div>
            </div>
        }
        </>
    );
}
export default Header