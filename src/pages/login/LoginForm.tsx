import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import useStore from '../../store/useStore'
import { AuthState } from '../../store/createAppSlice'

export interface LoginFormInputs {
	username: string
	password: string
}

const loginFormSchema = yup.object().shape({
	username: yup.string().required('Required'),
	password: yup.string().required('Required'),
})

const LoginForm = () => {
	const { setAuthState } = useStore((state) => state)
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormInputs>({
		resolver: yupResolver(loginFormSchema),
	})

	const onSubmit = async (data: LoginFormInputs) => {
		await new Promise((resolve) => setTimeout(resolve, 2000))
		localStorage.setItem('token', 'efbb616f-ac5f-45ed-b9b3-f726da1a5e78')
		setAuthState(AuthState.authenticated)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="form-control">
				<label className="label">
					<span className="label-text">Username</span>
				</label>
				<input
					{...register('username')}
					type="text"
					placeholder="Enter your username"
					className={`input input-bordered ${
						Boolean(errors.username) ? 'input-error' : ''
					}`}
				/>
				{Boolean(errors.username) && (
					<label className="label">
						<span className="text-error label-text-alt">
							{errors.username!.message}
						</span>
					</label>
				)}
			</div>
			<div className="form-control">
				<label className="label">
					<span className="label-text">Password</span>
				</label>
				<input
					{...register('password')}
					type="password"
					placeholder="Enter your password"
					className={`input input-bordered ${
						Boolean(errors.password) ? 'input-error' : ''
					}`}
				/>
				{Boolean(errors.password) && (
					<label className="label">
						<span className="text-error label-text-alt">
							{errors.password!.message}
						</span>
					</label>
				)}
			</div>
			<div className="form-control mt-6">
				<button
					disabled={isSubmitting}
					type="submit"
					className={`btn btn-primary ${
						isSubmitting ? 'loading' : ''
					}`}
				>
					Login
				</button>
			</div>
		</form>
	)
}

export default LoginForm
