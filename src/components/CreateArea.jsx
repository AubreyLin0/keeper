import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import Fab from '@mui/material/Fab'
import Zoom from '@mui/material/Zoom'

function CreateArea (props) {
  const [expanded, iseExpanded] = useState(false)

  function expandTextArea () {
    if (!expanded) {
      iseExpanded(true)
    }
  }
  return (
    <div>
      <form onSubmit={props.addNote} className='createNote'>
        <input
          onClick={expandTextArea}
          name='title'
          placeholder='Title'
          style={{ display: expanded ? 'block' : 'none' }}
          required
        />
        <textarea
          onClick={expandTextArea}
          name='content'
          placeholder='Take a note...'
          rows={expanded ? '3' : '1'}
          required
        />
        <Zoom in={expanded}>
          <Fab type='submit'>
            <AddIcon className='addIcon' />
          </Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default CreateArea
