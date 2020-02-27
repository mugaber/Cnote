This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Cnote

A web-based note taking app

## Motivation

I like taking notes mostly about the new things i am learning, but most applications
out there in my opinion is not feature complete for my use cases, so i have searched
for a while and i have decided to build my own app.

this app is highly inspired by this awesome open-source project
[takenote](https://github.com/taniarascia/takenote)

## additions

add category functionality

move loadNotes and loadCategories to the App component

some basic styles and change styles-folder structure
defined min and max width for editor

deleted onChange in the NoteEditor > CodeMirror becaue it was
causing the note to go to the last line when updating the note
