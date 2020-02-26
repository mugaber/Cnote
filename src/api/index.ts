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

export const setLocalNotes = ({ payload }) => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem('localNotes', JSON.stringify(payload))
    } catch (err) {
      reject({ message: err.message })
    }
    resolve(JSON.parse(localStorage.getItem('localNotes') || '[]'))
  })
}
