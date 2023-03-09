import globalHook from 'use-global-hook'
import { initialState, actions } from '../store/globalStore'
import { GActionsT, GStateT } from '../store/types'

const useGlobal: any = globalHook<GStateT, GActionsT>(initialState, actions)

export default useGlobal
