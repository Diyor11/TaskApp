import React from 'react'

interface ArrowDownIconProps{
  className: string;
}
const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({className}) => {
  return (
    <svg className={className} width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L7 7L13 1" stroke="white" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/>
    </svg> 
    
  )
}

export default ArrowDownIcon