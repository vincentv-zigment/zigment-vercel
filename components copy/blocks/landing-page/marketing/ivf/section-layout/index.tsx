import React, { CSSProperties } from 'react'

type Props = {
    className?:string;
    style?:CSSProperties;
    children: React.ReactNode;
}

const SectionLayout = ({className='', style={},children}: Props) => {
  return (
    <div className={`w-full h-full lg:h-screen  ${className}`} style={style}>{children}</div>
  )
}

export default SectionLayout