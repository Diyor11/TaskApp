import React, {FC} from 'react'

interface SearchIconProps{
  className: string;
}
const SearchIcon: FC<SearchIconProps> = ({...props}) => {
  return (
    <svg {...props} width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 18.2083C15.4183 18.2083 19 14.7758 19 10.5417C19 6.30748 15.4183 2.875 11 2.875C6.58172 2.875 3 6.30748 3 10.5417C3 14.7758 6.58172 18.2083 11 18.2083Z" stroke="white" stroke-linecap="round" strokeLinejoin="round"/>
      <path d="M20.9999 20.1248L16.6499 15.9561" stroke="white" stroke-linecap="round" strokeLinejoin="round"/>
    </svg>

  )
}

export default SearchIcon