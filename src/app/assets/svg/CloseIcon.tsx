import React from 'react'

type Props = {className: string, onClick: () => void}

function CloseIcon({className, onClick}: Props) {
  return (
    <svg className={className} onClick={onClick} width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Menu / Close_LG">
        <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </svg>
  )
}

export default CloseIcon