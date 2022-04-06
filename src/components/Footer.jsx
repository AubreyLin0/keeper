import React from 'react'

let year = new Date().getFullYear()

function Footer () {
  return (
    <footer>
      <p>©{year} Aubrey Lin. All rights reserved.</p>
    </footer>
  )
}

export default Footer
