import { Link } from 'react-router-dom';
import { useState } from 'react';
import './header.css';
import { AiFillHome } from 'react-icons/ai';
import { IoSettings, IoNotifications } from 'react-icons/io5';
import { TbWritingSign } from 'react-icons/tb';
import { FaUserAlt } from 'react-icons/fa';
import Darkmode from '../DarkMode/Darkmode';
import { useAccountContext } from '../../pages/AccountContext';
import { NFT0, NFT1, NFT2, NFT3, NFT5, NFT6, NFT7, NFT8, NFT9, NFT10, NFT11, NFT12, NFT13, NFT14, NFT15, NFT16, NFT17, NFT18, NFT19, NFT20, NFT21 } from '../../assets';

const Header = () => {
    const isConnected = window.sessionStorage.getItem('user');
    const [show, setShow] = useState(false);
    const toggle = () => {
        setShow(!show);
    }
    const imdg = Math.floor(Math.random() * 21);
    const profileImag = [
        NFT0,
        NFT1,
        NFT2,
        NFT3,
        NFT5,
        NFT6,
        NFT7,
        NFT8,
        NFT9,
        NFT10,
        NFT11,
        NFT12,
        NFT13,
        NFT14,
        NFT15,
        NFT16,
        NFT17,
        NFT18,
        NFT19,
        NFT20,
        NFT21
    ]
    const { selectJoin, selectCreate, selectView, setView, help } = useAccountContext();
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
                            <h2 className="logo" onClick={()=> setView('Landing')}>NullFun()</h2>
                            <div className="contr">
                                <li className="cids">
                                    <p className="hdhm lnk" onClick={()=> setView('BloWrap')}>Home</p>
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
                                <p className="lopi"><Darkmode className="dmd fg" /></p>
                                <div className="profimg">
                                    <img className="pfpb"src={profileImag[imdg]} alt="profile" />
                                </div>
                            </div>
                            <div className={show ? "dropdown show" : "dropdown"}>
                                <div className="hdr">
                                    <div className="drclose" onClick={()=>toggle()}>
                                        <span className="drbar"></span>
                                        <span className="drbar"></span>
                                    </div>
                                    <h2 className="logo" onClick={()=>{
                                        toggle()
                                        setView('Landing');
                                    }}>NullFun()</h2>
                                </div>
                                <ul className="drlinks">
                                    <li className="drlink">
                                        <p className="iconNav" onClick={()=>{
                                            setView('BloWrap')
                                        }}> Home</p>
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
                    :
                    <div className="header">
                        <div className="hamburger" onClick={() => toggle()}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                        <h2 className="logo" onClick={()=>setView('Landing')}>NullFun()</h2>
                        <button className="connectBtn gtstd" onClick={()=>setView('Connect')}>Get Started</button>
                        <div className={show ? "dropdown show" : "dropdown"}>
                            <div className="hdr">
                                <div className="drclose">
                                    <span className="drbar"></span>
                                    <span className="drbar"></span>
                                </div>
                                <h2 className="logo" onClick={()=>setView('Landing')}>NullFun()</h2>
                            </div>
                            <ul className="drlinks">
                                    <li className="drlink">
                                        <p className="iconNav" onClick={()=>{
                                            toggle()
                                            setView('Landing')
                                            }}> Home</p>
                                    </li>
                                    <button className="connectBtn gtstd" onClick={()=>{
                                        toggle()
                                        setView('Connect')
                                        }
                                    }>Get Started</button>
                                    <br/>
                                    <p><Darkmode /></p>
                            </ul>
                            </div>
                    </div>
            }
        </>
    );
}
export default Header