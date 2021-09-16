import { Link, useLocation } from 'react-router-dom'
import { FiHome, FiCalendar, FiBox } from 'react-icons/fi'

import * as routes from '../constants/routes'

const SideNav = () => {
	const location = useLocation()

	return (
		<ul className="w-full h-full menu bg-white rounded-r-xl">
			<li className="p-5 menu-title">
				<svg
					className="w-16 h-16"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
					/>
				</svg>
			</li>
			<li className="bordered">
				<Link to={routes.DASHBOARD}>
					<FiHome className="inline-block w-5 h-5 mr-2 stroke-current" />
					Home
				</Link>
			</li>
			<li
				className={`${
					location.pathname === routes.CALENDAR
				} ? 'bordered' : ''`}
			>
				<Link to={routes.CALENDAR}>
					<FiCalendar className="inline-block w-5 h-5 mr-2 stroke-current" />
					Calendar
				</Link>
			</li>
			<li
				className={`${location.pathname.includes(
					routes.ORDERS
				)} ? 'bordered' : ''`}
			>
				<Link to={routes.ORDERS}>
					<FiBox className="inline-block w-5 h-5 mr-2 stroke-current" />
					Orders
				</Link>
			</li>
		</ul>
	)
}

export default SideNav
