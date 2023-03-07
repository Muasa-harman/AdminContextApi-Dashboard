import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./New.scss"
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';

const New = ({title}) => {
  const [file,setFile] = useState("")
  return (
    <div className='new'>
      <Sidebar/>
      <div className='newContainer'>
        <Navbar/>
        <div className='top'>
          <h1>{title}</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img src={file ? URL.createObjectURL(file) :'https://t3.ftcdn.net/jpg/04/84/88/76/360_F_484887682_Mx57wpHG4lKrPAG0y7Q8Q7bJ952J3TTO.jpg'} alt=''/>
          </div>
          <div className='right'>
            <form>
            <div className='formInput'>
                <label htmlFor='file'>Image:<DriveFolderUploadRoundedIcon className='icon'/></label>
                <input type='file' id='file' onChange={(e)=>setFile(e.target.files[0])} style={{display:"none"}}/>
              </div>
              <div className='formInput'>
                <label>Username</label>
                <input type='text' placeholder='joe doe'/>
              </div>
              <div className='formInput'>
                <label>Name and surname</label>
                <input type='text' placeholder='John Doe'/>
              </div>
              <div className='formInput'>
                <label>Email</label>
                <input type='email' placeholder='john_doe@gmail.com'/>
              </div>
              <div className='formInput'>
                <label>Phone</label>
                <input type='text' placeholder='+254721456992'/>
              </div>
              <div className='formInput'>
                <label>Password</label>
                <input type='password'/>
              </div>
              <div className='formInput'>
                <label>Address</label>
                <input type='text' placeholder='Kasarani Mwiki rd'/>
              </div>
              <div className='formInput'>
                <label>Country</label>
                <input type='text' placeholder='Kenya'/>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New