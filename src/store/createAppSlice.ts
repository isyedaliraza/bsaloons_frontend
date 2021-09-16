import { GetState, SetState } from 'zustand'
import { StoreState } from './useStore'

export enum AuthState {
	loading,
	unauthenticated,
	authenticated,
}

export interface AppSlice {
	authState: AuthState
	setAuthState: (state: AuthState) => void
	isLoggedIn: () => void
}

const createAppSlice = (set: SetState<StoreState>, get: GetState<StoreState>) =>
	({
		authState: AuthState.loading,
		setAuthState: (state) => set({ authState: state }),
		isLoggedIn: async () => {
			await new Promise((resolve) => setTimeout(resolve, 1000))
			const token = localStorage.getItem('token')
			set({
				authState: Boolean(token)
					? AuthState.authenticated
					: AuthState.unauthenticated,
			})
		},
	} as StoreState)

export default createAppSlice
