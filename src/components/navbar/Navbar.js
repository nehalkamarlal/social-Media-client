import React, { useRef, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router";
import Avatar from "../avatar/Avatar";
import "./Navbar.scss";
import {useDispatch, useSelector} from 'react-redux';
import { KEY_ACCESS_TOKEN, removeItem } from "../../utils/localStorageManager";
import { axiosClient } from "../../utils/axiosClient";


function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const myProfile = useSelector(state => state.appConfigReducer.myProfile);

    async function handleLogoutClicked() {
        try {
			await axiosClient.post('/auth/logout');
			removeItem(KEY_ACCESS_TOKEN);
			navigate('/login')
		} catch (e) {
			
		}
    }

    return (
        <div className="Navbar" style={{backgroundColor:"#aaa"}}>
            <div className="container">
                <h2 className="banner hover-link" onClick={() => navigate("/")}>
                   <span style={{color:"#0ef"}}><span className="logo">L</span>earn</span><span style={{color:"#081b29"}}>ProMedia</span>
                </h2>
                <div className="right-side">
                    <div
                        className="profile hover-link"
                        onClick={() => navigate(`/profile/${myProfile?._id}`)}
                    >
                        <Avatar src={myProfile?.avatar?.url}/>
                    </div>
                    <div className="logout hover-link" onClick={handleLogoutClicked}>
                        <AiOutlineLogout />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;