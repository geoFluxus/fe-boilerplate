import { Store } from 'use-global-hook'
import { GActionsT, GStateT } from './types'

export const initialState = {
  calculations: [],
 
}

export const actions = {
  updateCalculations: ({ state, setState }: Store<GStateT, GActionsT>, formula) => {
    setState({ ...state, calculations: [...state.calculations, formula] })
  }
}
