import React from "react";
import userImg from "../../asset/user.png";
import "./Avatar.scss";

function Avatar({ src }) {
    return (
        <div className="Avatar" style={{border:"2px solid #FFC300"}}>
            <img src={src ? src : userImg} alt="user avatar" />
        </div>
    );
}

export default Avatar;