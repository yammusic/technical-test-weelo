import { createAction } from 'redux-actions'

export const saveAppName = createAction<string>('app/SAVE_APP_NAME')
export const saveCopyright = createAction<string>('app/SAVE_COPYRIGHT')
