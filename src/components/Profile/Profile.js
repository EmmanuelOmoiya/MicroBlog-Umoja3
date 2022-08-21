import './profile.css';
import {  useEffect, useState } from 'react';

const Profile = () => {
        const address = window.localStorage.getItem('user');
    return (
        <div className="profile">
            <div className="profBanner">

            </div>
            <div className="profDetails">
                <div className="profiimg">
                    <p className="imgm"></p>
                </div>
                <div className="profdethead">
                    <p className="headname">John Doe</p>
                    <p className="headaddr">{address}</p>
                </div>
                <div className="proffoll">
                    <div className="profollowing">
                        <p className="folnum">48</p>
                        <p className="folname">Posts</p>
                    </div>
                    <div className="profollowers">
                        <p className="folnum">1.2m</p>
                        <p className="folname">Viewers</p>
                    </div>
                </div>
                <button className="profedit">Edit profile</button>
            </div>
        </div>
    );
}
export default Profile