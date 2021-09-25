import React from 'react';
import { Link } from 'react-router-dom';

const EasterEgg = () => {
    return (
        <div className="easter-egg-txt">
            You found the easter egg!!!
            <div className="easter-egg-txt-2">
                You have wasted your time.
            </div>
            <div className="nav">
                <Link to="/portfolio">
                    Return
                </Link>
            </div>
        </div>
    );
};

export default EasterEgg;
