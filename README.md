This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## cNote

A web-based note taking app

# Motivation

I like taking notes mostly about the new things i am learning but most applications
out there in my opinion is not feature complete for my use cases, so i have searched
for a while and i have decided to build my own app.

this app is highly inspired by this awesome open-source project
[takenote](https://github.com/taniarascia/takenote)

# additions

in this commit i have added the redux boilerplate and connected the redux store
with the app using the Provider

there are only two reducers note and active and three actions related to the note

there are only two containers NoteList and NoteEditor to represent the codeMirror editor

there some basic styling in the styles folder, i'm leaving styling for later
