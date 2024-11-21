import React from 'react';

interface ButtonIVFProps {
    text: string;
    onClick: () => void;
    style?: React.CSSProperties;
    className?:string
}

const ButtonIVF: React.FC<ButtonIVFProps> = ({ text, onClick, style, className='' }) => {
    return (
        <button className={`${className} bg-ivf-main/80 hover:bg-ivf-main transition-all font-bold text-2xl px-8 py-3 rounded-2xl`} onClick={onClick} style={style}>
            {text}
        </button>
    );
};

export default ButtonIVF;