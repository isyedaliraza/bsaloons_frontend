import { createRef } from 'react'

import { FiMenu } from 'react-icons/fi'

import HomeRoutes from '../../components/HomeRoutes'
import SideNav from '../../components/SideNav'

const HomePage = () => {
	const sideNavRef = createRef<HTMLDivElement>()

	return (
		<div className="bg-gray-50 min-h-screen flex">
			{/* Side Nav */}
			<div
				ref={sideNavRef}
				className="w-64 md:relative absolute inset-y-0 left-0 md:-translate-x-0 -translate-x-full transform transition duration-200 ease-in-out"
			>
				<SideNav />
			</div>
			{/* Content */}
			<div className="p-5 flex-1">
				<div className="w-full mb-5 flex justify-between items-center md:hidden">
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
					<button
						onClick={() => {
							sideNavRef.current?.classList.toggle(
								'-translate-x-full'
							)
						}}
						className="btn btn-square"
					>
						<FiMenu />
					</button>
				</div>
				<div className="h-full w-full">
					<HomeRoutes />
				</div>
			</div>
		</div>
	)
}

export default HomePage
