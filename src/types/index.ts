export interface NoteItem {
  id: string
  text: string
  created: string
  lastUpdated: string
}

export interface SyncReducer {
  syncing: boolean
  error: string
}
