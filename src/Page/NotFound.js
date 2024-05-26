import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className='Page_not_found_container'>
    <section className="error-container">
      <div className="span-container four"><span className="screen-reader-text">4</span></div>
      <div className="span-container zero"><span className="screen-reader-text">0</span></div>
      <div className="span-container four"><span className="screen-reader-text">4</span></div>
    </section>
    <div className="link-container d-flex justify-content-center align-items-center">
    <h1>Page Not Found</h1>
      <Button variant="success">
        <Link to="/" className=''>Home page</Link>
      </Button>
    </div>
  </div>
    )
}
