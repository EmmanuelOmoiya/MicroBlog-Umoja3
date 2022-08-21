import './write.css';
import { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { TbPhoto } from  'react-icons/tb';
import { Link } from 'react-router-dom';

const Write = () => {
    const [ isWrite, setIsWrite ] = useState(true);
    return (
        <div className="write-container">
            <div className="write-choose">
                <div className="wchoose1">
                    <p className="wchoosen"> <TbPhoto className="photo"/>Post a photo</p>
                    <span className="wchosesh"></span>
                </div>
            </div>
            {
                isWrite ?
                <div className="writechoic">
                    <span className="leftchoic">
                    <p className="profimg"></p>
                    <p className="whatonym">What's on your mind?</p>
                    </span>
                    <Link to="/write-post" ><button className="tweet">Write</button></Link>
                </div> 
                :
                <div className="photochoic">

                </div>
            }
        </div>
    )
}
export default Write