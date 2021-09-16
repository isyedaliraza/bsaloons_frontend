import LoginForm from './LoginForm'

const LoginPage = () => {
	return (
		<div className="p-12 w-full h-full flex flex-col md:flex-row justify-center items-center">
			<div className="w-full md:w-1/2 h-1/2">
				<img
					className="w-full h-full"
					src="/assets/illustrations/barber.svg"
					alt="Illustration of barber in saloon"
				/>
			</div>
			<div className="w-full md:w-1/2 h-1/2 max-w-screen-sm">
				<div className="p-5 card shadow-2xl bg-base-100">
					<div className="card-body">
						<LoginForm />
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginPage
