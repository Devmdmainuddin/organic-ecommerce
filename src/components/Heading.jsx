import React from 'react';

const heading = ({text,className}) => {
    return (
        <div>
            <div className={`text-[35px] font-bold leading-[42px] tracking-[0%] text-center text-[#282828] font-inter ${className}`}>
            {text}
            </div>
        </div>
    );
};

export default heading;