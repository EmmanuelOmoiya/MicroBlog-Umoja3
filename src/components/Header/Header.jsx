import { Link } from 'react-router-dom';
import { useState } from 'react';
import './header.css';
import { AiFillHome } from 'react-icons/ai';
import { IoSettings, IoNotifications } from 'react-icons/io5';
import { TbWritingSign } from 'react-icons/tb';
import { FaUserAlt } from 'react-icons/fa';
import Darkmode from '../DarkMode/Darkmode';
import { useAccountContext } from './../pages/AccountContext';
import { NFT0, NFT1, NFT2, NFT3, NFT5 } from '../../assets';

const Header = () => {
    const isConnected = window.sessionStorage.getItem('user');
    const [show, setShow] = useState(false);
    const toggle = () => {
        setShow(!show);
    }
    const profileImag = [
        NFT0,
        NFT1,
        NFT2,
        NFT3,
        NFT5
    ]
    const { selectJoin, selectCreate, selectView, help } = useAccountContext();
    //const imag = Math.Floor(Math.random * 6);
    return (
        <>
            {
                isConnected ?
                    <div className="header">
                            <div className="hamburger" onClick={() => toggle()}>
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </div>
                            <Link to="/" className="lolink"><h2 className="logo">NullFun()</h2></Link>
                            <div className="contr">
                                <li className="cids">
                                    <Link to="/" clasName="ink"><p className="hdhm lnk">Home</p></Link>
                                </li>
                                <li className="cids">
                                    <p className="hdhm lnk" onClick={()=>selectCreate()}>Create</p>
                                </li>
                                <li className="cids">
                                    <p className="hdhm lnk" onClick={()=>selectView()}>Read</p>
                                </li>
                                <li className="cids">
                                    <p className="hdhm lnk" onClick={()=>selectJoin()}>Join</p>
                                </li>
                            </div>
                            <div className="leftNav">
                                <Darkmode className="dmd fg" />
                                <div className="profimg">
                                    <img className="pfpb"src={profileImag[Math.floor(Math.random() * 5)]} alt="profile" />
                                </div>
                            </div>
                            <div className={show ? "dropdown show" : "dropdown"}>
                                <div className="hdr">
                                    <div className="drclose" onClick={()=>toggle()}>
                                        <span className="drbar"></span>
                                        <span className="drbar"></span>
                                    </div>
                                    <Link to="/" className="drlolink"><h2 className="logo">NullFun()</h2></Link>
                                </div>
                                <ul className="drlinks">
                                    <li className="drlink">
                                        <Link to="/home"  className="ink drink"><p className="iconNav" /> Home</Link>
                                    </li>
                                    <li className="drlink">
                                       <p className="drink" onClick={()=>{
                                        toggle()
                                        selectCreate()
                                        }
                                    }>Create Stream</p>
                                    </li>
                                    <li className="drlink">
                                        <p className="drink" ononClick={()=>{
                                        toggle()
                                        selectJoin()
                                        }
                                    }>Join Stream</p>
                                    </li>
                                    <Darkmode />
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
                        <Link to="/" className="lolink"><h2 className="logo">NullFun()</h2></Link>
                        <button className="connectBtn gtstd" onClick={()=>window.location.href="/connect-account"}>Get Started</button>
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
                                        <Link to="/home"  className="ink drink"><p className="iconNav" onClick={()=>toggle()}/> Home</Link>
                                    </li>
                                    <li className="drlink">
                                       <p className="drink" onClick={()=>{
                                        toggle()
                                        selectCreate()
                                        }
                                    }>Create Stream</p>
                                    </li>
                                    <li className="drlink">
                                        <p className="drink" onClick={()=>{
                                        toggle()
                                        selectJoin()
                                        }
                                    }>Join Stream</p>
                                    </li>
                                    <Darkmode />
                                </ul>
                            </div>
                    </div>
            }
        </>
    );
}
export default Header