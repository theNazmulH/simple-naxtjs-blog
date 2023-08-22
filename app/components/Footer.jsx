import React from 'react';

function Footer() {
    return (
        <div className="bg-gray-900 text-center px-4 py-4">
            <p>&copy; { new Date().getFullYear()} All right reserved</p>
        </div>
    );
}

export default Footer;