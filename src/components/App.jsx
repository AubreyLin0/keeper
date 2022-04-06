import React, { useState } from 'react'
import Header from './Header'
import Note from './Note'
import Footer from './Footer'
import CreateArea from './CreateArea'

function App () {
  const [note, setNote] = useState([])

  function addNote (event) {
    event.preventDefault()
    let title = event.target.title.value
    let content = event.target.content.value
    setNote(preNote => {
      return [...preNote, { title: title, content: content }]
    })
    event.target.title.value = ''
    event.target.content.value = ''
  }

  function deleteNote (id) {
    setNote(preNote => {
      return preNote.filter((item, index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {note.map((item, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={item.title}
            content={item.content}
            delete={deleteNote}
          />
        )
      })}

      <Footer />
    </div>
  )
}

export default App
