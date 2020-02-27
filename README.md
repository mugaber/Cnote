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

basic app sidebar

category reducer for note categories or maybe later notebooks

loadCategories as well as loadNotes will be fired once the app loads
if there is no notes or categories this will result in an error only
apparent in the store and if sync made will not happend again

syncState will sync both notes and categories and will not fail
because if localStorage is empty will provide empty array as a string

some basic changes to the style
