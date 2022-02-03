import React from 'react';
import './sidebar.css';

// Material Icon
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailIcon from '@mui/icons-material/Mail';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatIcon from '@mui/icons-material/Chat';
import WorkIcon from '@mui/icons-material/Work';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import ReportIcon from '@mui/icons-material/Report';

export default function Sidebar() {
  return (
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                  <li className="sidebarListItem active">
                    <HomeIcon className="sidebarIcon" /> Home
                  </li>
                  <li className="sidebarListItem">
                    <AnalyticsIcon className="sidebarIcon" /> Analytics
                  </li>
                  <li className="sidebarListItem">
                    <TrendingUpIcon className="sidebarIcon" /> Sales
                  </li>
                </ul>  
            </div>  
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                  <li className="sidebarListItem">
                    <PeopleIcon className="sidebarIcon" /> Users
                  </li>
                  <li className="sidebarListItem">
                    <StorefrontIcon className="sidebarIcon" /> Products
                  </li>
                  <li className="sidebarListItem">
                    <AttachMoneyIcon className="sidebarIcon" /> Transactions
                  </li>
                  <li className="sidebarListItem">
                    <BarChartIcon className="sidebarIcon" /> Reports
                  </li>
                </ul>  
            </div>  
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Notification</h3>
                <ul className="sidebarList">
                  <li className="sidebarListItem">
                    <MailIcon className="sidebarIcon" /> Mail
                  </li>
                  <li className="sidebarListItem">
                    <DynamicFeedIcon className="sidebarIcon" /> Feedback
                  </li>
                  <li className="sidebarListItem">
                    <ChatIcon className="sidebarIcon" /> Messages
                  </li>
                </ul>  
            </div>  
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                  <li className="sidebarListItem">
                    <WorkIcon className="sidebarIcon" /> Manage
                  </li>
                  <li className="sidebarListItem">
                    <LegendToggleIcon className="sidebarIcon" /> Analytics
                  </li>
                  <li className="sidebarListItem">
                    <ReportIcon className="sidebarIcon" /> Reports
                  </li>
                </ul>  
            </div>  
          </div>
        </div>
    );
}
