import React from 'react'

type Props = {
  className: string;
}

function PlayIcon({className}: Props) {
  return (
    <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="white" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/>
      <path d="M12.5 10L20 15L12.5 20V10Z" stroke="white" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/>
    </svg>

  )
}

export default PlayIcon