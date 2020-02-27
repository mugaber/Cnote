export const getLocalNotes = () => {
  return new Promise((resolve, reject) => {
    const data = localStorage.getItem('localNotes') || '[]'
    if (data) {
      resolve(JSON.parse(data))
    } else {
      reject({ message: 'No notes in local storage' })
    }
  })
}

export const getLocalCategories = () => {
  return new Promise((resolve, reject) => {
    const data = localStorage.getItem('localCategories')
    if (data) {
      resolve(JSON.parse(data))
    } else {
      reject({ message: 'No Categories in local storage' })
    }
  })
}

export const syncLocalState = ({ payload: { notes, categories } }) => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem('localNotes', JSON.stringify(notes))
      localStorage.setItem('localCategories', JSON.stringify(categories))
      resolve({
        notes: JSON.parse(localStorage.getItem('localNotes') || '[]'),
        categories: JSON.parse(localStorage.getItem('localCategories') || '[]'),
      })
    } catch (err) {
      reject({ message: err.message })
    }
  })
}
