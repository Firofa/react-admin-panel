// CSS
import './user.css'

// Icon
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CakeIcon from '@mui/icons-material/Cake';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';
import PublishIcon from '@mui/icons-material/Publish';

export default function User() {
  return (
    <div className="user">
        <div className='userTitleContainer'>
            <h1 className="userTitle">Edit User</h1>
            <button className="userAddButton">Create</button>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img 
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                    alt=""
                    className='userShowImage' 
                    />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Jon Snow</span>
                        <span className="userShowUserTitle">IT Consultant</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentityIcon className='userShowIcon' />
                        <span className="userShowInfoTitle">jonsnow99</span>
                    </div>
                    <div className="userShowInfo">
                        <CakeIcon className='userShowIcon' />
                        <span className="userShowInfoTitle">02.02.2022</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PermPhoneMsgIcon className='userShowIcon' />
                        <span className="userShowInfoTitle">+62 812 234 56789 </span>
                    </div>
                    <div className="userShowInfo">
                        <MailIcon className='userShowIcon' />
                        <span className="userShowInfoTitle">jonsnow@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <PlaceIcon className='userShowIcon' />
                        <span className="userShowInfoTitle">Jabar Indonesia</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input 
                                type="text" 
                                placeholder='jonsnow99' 
                                className='userUpdateInput' 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Fullname</label>
                            <input 
                                type="text" 
                                placeholder='Jon Snow' 
                                className='userUpdateInput' 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input 
                                type="email" 
                                placeholder='jonsnow@gmail.com' 
                                className='userUpdateInput' 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input 
                                type="email" 
                                placeholder='+62 812 234 56789' 
                                className='userUpdateInput' 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input 
                                type="text" 
                                placeholder='+62 812 234 56789' 
                                className='userUpdateInput' 
                            />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img
                            className='userUpdateImage' 
                            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                            alt="" 
                            />
                            <label htmlFor="file">
                                <PublishIcon className="userUpdateIcon" />
                            </label>
                            <input type="file"  id="file" style={{display: "none"}} />
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}
