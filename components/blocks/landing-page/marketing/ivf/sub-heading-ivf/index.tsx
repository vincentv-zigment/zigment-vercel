import React from 'react';

interface SubHeadingIVFProps {
    children: React.ReactNode;
    className?:string
}

const SubHeadingIVF: React.FC<SubHeadingIVFProps> = ({ children, className }) => {
    return (
        <h2 className={`text-base lg:text-3xl font-bold ${className}`}>{children}</h2>
    );
};

export default SubHeadingIVF;