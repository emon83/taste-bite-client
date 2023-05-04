import React, { useContext } from 'react';
import './UserDetails.css'
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const UserDetails = () => {
    const { user } = useContext(AuthContext);
    //console.log(user);
    return (
        <div className='user-page bg-gray-100 py-4 md:py-10'>
            <div className='user-container'>
                <div className='mx-auto text-center user'>
                <img className='w-36 sm:w-56 lg:w-64 rounded-full mx-auto' src={user?.photoURL} alt="" />
                </div>
                <h2 className='text-2xl sm:text-4xl text-sky-950 font-extrabold text-center user-title'>USER NAME</h2>
                <h4 className='text-center text-lg sm:text-xl font-bold my-4 user-title'>{user?.displayName}</h4>
                <p className='text-center text-gray-600'>User Id: {user?.uid}</p>
                <div className='mt-4'>
                                    {/* The button to open modal */}
                    <div className='text-center'>
                    <label htmlFor="my-modal" className="btn text-center btn-sm btn-outline">Update Profile</label>
                    </div>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Are you sure you want to update your profile picture?!</h3>
                        <form className='mt-8'>
                            <div className='form-control'>
                            <label htmlFor="name">Upgrade your Display Name</label>
                            <input type="text" placeholder='name' />
                            </div>
                            <div className='form-control'>
                            <label htmlFor="photo">Upgrade your profile photo</label>
                            <input type="text" placeholder='photo url' />
                            </div>
                        </form>
                        <div className="modal-action">
                          <label htmlFor="my-modal" className="btn btn-outline btn-sm">Confirm!</label>
                        </div>
                      </div>
                    </div>
                </div>
                <Link to="/">
                <div className='text-center mt-2 mb-4'>
                {user && <button className='text-center btn btn-ghost btn-sm'>Go Back Home Page</button>}
                </div></Link>
            </div>
        </div>
    );
};

export default UserDetails;