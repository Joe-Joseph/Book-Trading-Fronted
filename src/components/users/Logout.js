import React from 'react';

const Logout = () => {
    localStorage.setItem('token', null);
    localStorage.setItem('userId', null);
    window.location.replace('/')

    return <div></div>
}

export default Logout;