import React from 'react';
import './topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';


function Topbar() {
  return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Firofa</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                      <NotificationsNoneIcon />
                      <span className="topIconBadge">2</span>
                    </div>

                    <div className="topbarIconContainer">
                      <LanguageIcon />
                      <span className="topIconBadge">2</span>
                    </div>
 
                    <div className="topbarIconContainer">
                      <SettingsIcon />
                    </div>

                    <img src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
}

export default Topbar;
