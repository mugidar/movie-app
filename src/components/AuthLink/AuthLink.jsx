import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { twMerge } from 'tailwind-merge'
const AuthLink = ({className}) => {
	return (
		<span className={twMerge("cursor-pointer flex items-center gap-1", className)}>
			<AccountCircleOutlinedIcon className={"dark:text-white text-black"} />
			<p>Sign in</p>
		</span>
	)
}

export default AuthLink
