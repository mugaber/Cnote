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

export interface CategoryItem {
  id: string
  name: string
}

export interface CategoryReducer {
  categories: CategoryItem[]
  loading: boolean
  active: string
  error: string
}
