import React from 'react';

const Footer = () => {
    return (
        <div className="copyRight text-center text-white my-3 py-3">
            <p className="mb-0 text-white">Copyright &#169;{(new Date()).getFullYear()} All Rights Reserved</p>
            <p className="mx-auto">
              Designed by <span className="text-warning">Mahfuz Alam</span>
            </p>
        </div>
    );
};

export default Footer;