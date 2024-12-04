import React, { CSSProperties } from 'react'

type Props = {
    className?:string;
    style?:CSSProperties;
    children: React.ReactNode;  
}

const ContainerIVF = ({style, className, children}: Props) => {
  return (
    <div className={` w-full h-full mx-auto max-w-7xl py-8 lg:py-24 px-4 lg:px-10 ${className}`} style={style}>{children}</div>
  )
}

export default ContainerIVF