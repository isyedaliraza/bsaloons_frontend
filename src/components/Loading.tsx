import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loading = () => {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="flex-col justify-center hero-content lg:flex-row">
				<AiOutlineLoading3Quarters className="animate-spin w-12 h-12" />
			</div>
		</div>
	)
}

export default Loading
