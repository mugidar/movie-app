import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const AuthLink = () => {
  return (
    <span className='cursor-pointer flex items-center gap-1'>
        <AccountCircleOutlinedIcon className='dark:text-white text-black'/>
        <p>Sign in</p>
    </span>
  )
}

export default AuthLink