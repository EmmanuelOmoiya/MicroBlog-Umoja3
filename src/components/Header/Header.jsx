import { Link } from 'react-router-dom';
import { useState } from 'react';
import './header.css';
import { AiFillHome } from 'react-icons/ai';
import { IoSettings, IoNotifications } from 'react-icons/io5';
import { TbWritingSign } from 'react-icons/tb';
import { FaUserAlt } from 'react-icons/fa';
import Darkmode from '../DarkMode/Darkmode';

const Header = () => {
    const isConnected = window.sessionStorage.getItem('user');
    const [show, setShow] = useState(false);
    const toggle = () => {
        setShow(!show);
    }
    return (
        <>
            {
                isConnected ?
                    <div className="header">
                            <div className="hamburger">
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </div>
                            <Link to="/" className="lolink"><h2 className="logo">MicroBlog</h2></Link>
                            <div className="contr">
                                <li className="cids">
                                    <Link to="/"><AiFillHome className="iconNav" /></Link>
                                </li>
                                <li className="cids">
                                    <Link to="/write-post"><TbWritingSign className="iconNav" /></Link>
                                </li>
                                <li className="cids">
                                    <Link to="/my-posts"><FaUserAlt className="iconNav" /></Link>
                                </li>
                                <li className="cids">
                                    <Link to="/settings"><IoSettings className="iconNav" /></Link>
                                </li>
                            </div>
                            <div className="leftNav">
                                <Darkmode className="dmd" />
                                <input type="text" className="searchNav" placeholder="Search posts" />
                                <p className="profimg">
                                </p>
                            </div>
                            <div className={show ? "dropdown show" : "dropdown"}>
                                <div className="hdr">
                                    <div className="drclose">
                                        <span className="drbar"></span>
                                        <span className="drbar"></span>
                                    </div>
                                    <Link to="/" className="drlolink"><h2 className="logo">MicroBlog</h2></Link>
                                </div>
                                <ul className="drlinks">
                                    <li className="drlink">
                                        <Link to="/home"><p className="iconNav" /> Home</Link>
                                    </li>
                                    <li className="drlink">
                                        <Link to="/write"><p className="iconNav" />Write</Link>
                                    </li>
                                    <li className="drlink">
                                        <Link to="/search"><p className="iconNav" />Search</Link>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    :
                    <div className="header">
                        <div className="hamburger" onClick={() => toggle()}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                        <Link to="/" className="lolink"><h2 className="logo">MicroBlog</h2></Link>
                        <div className="leftNav">
                            <Darkmode />
                        </div>
                        <div className={show ? "dropdown show" : "dropdown"}>
                            <div className="hdr">
                                <div className="drclose">
                                    <span className="drbar"></span>
                                    <span className="drbar"></span>
                                </div>
                                <Link to="/" className="drlolink"><h2 className="logo">MicroBlog</h2></Link>
                            </div>
                            <ul className="drlinks">
                                <li className="drlink">
                                    <Link to="/home"><p className="iconNav" /> Home</Link>
                                </li>
                                <li className="drlink">
                                    <Link to="/write"><p className="iconNav" />Write</Link>
                                </li>
                                <li className="drlink">
                                    <Link to="/search"><p className="iconNav" />Search</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
            }
        </>
    );
}
export default Header