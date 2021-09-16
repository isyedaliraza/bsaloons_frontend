import create from 'zustand'

import createAppSlice, { AppSlice } from './createAppSlice'

export type StoreState = AppSlice

const useStore = create<StoreState>((set, get) => ({
	...createAppSlice(set, get),
}))

export default useStore
