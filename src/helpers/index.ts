export const getTitle = text => {
  if (!text) {
    return 'empty note'
  } else if (text.indexOf('\n') !== -1) {
    return text.slice(0, text.indexOf('\n'))
  } else {
    return text.slice(0, 40)
  }
}

export const downloadNote = text => {
  const filename = getTitle(text)
  const element = document.createElement('a')
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  )
  element.setAttribute('download', `${filename}.md`)
  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}
