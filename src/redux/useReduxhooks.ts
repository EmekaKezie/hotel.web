import { useDispatch } from "react-redux"
import { AppDispatch, AppStore, RootState } from "./store"
import { useSelector } from "react-redux"
import { useStore } from "react-redux"

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()