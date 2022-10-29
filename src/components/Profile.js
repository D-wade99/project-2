import React from "react";


export default function Profile(){
    return(
        <header className="header">
            <div className="share--icon">
                <img src="Images/Avatar share button.png" alt="share"/>
            </div>
            <img src="Images/pic.png" alt="profile-pic" className="img" id="profile-img"/>
            <p id="twitter">Sijuade Daniel</p>
            <p id="slack" hidden>Sijuade Daniel</p>
        </header> 
    )
}