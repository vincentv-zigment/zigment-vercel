 import React from 'react';

interface HeadingIVFProps {
    children: React.ReactNode;
    className?:string
}

const HeadingIVF: React.FC<HeadingIVFProps> = ({ children, className='' }) => {
    return (
        <h1 className={`text-2xl lg:text-5xl font-extrabold uppercase ${className}`}>{children}</h1>
    );
};

export default HeadingIVF;