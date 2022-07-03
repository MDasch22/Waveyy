import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <h2 className='footerTitle'>Connect with me:</h2>
        <a href="https://github.com/MDasch22" id='linkGit'>
          <i className="fa-brands fa-github fa-2xl" id="git"></i>
        </a>
        <a href='https://www.linkedin.com/in/michael-dasch-71b6a6187' id='linkedIn'>
          <i className="fa-brands fa-linkedin fa-2xl" id='linkIn'></i>
        </a>
      </div>
    </footer>
  )
}
