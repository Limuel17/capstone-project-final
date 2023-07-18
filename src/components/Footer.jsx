import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';
import '../Styles/footer.css'

export default function Footer() {
  return (
    <MDBFooter bgColor='primary' className='text-center text-lg-left footer'>
      <div className='text-center p-3'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className=' footer-title' href='#'>
          Capstone Project Group 2
        </a>
      </div>
    </MDBFooter>
  );
}