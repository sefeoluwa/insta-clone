  import profileIcon from '../assets/profileIcon.svg'
  import { useState } from 'react'
  
  const Bio = () => {
    const [userDetails, setUserDetails] = useState({
        name: 'Sefeoluwa Akinbeye',
        about: 'Self-taught Frontend Developer.'
    })

    const updateUserDetails = (e) => {
        e.preventDefault()
        setUserDetails({
            name: e.target.nameOfUser.value,
            about: e.target.aboutUser.value
        })

    }

    const [editFormIsOpen, setEditFormIsOpen] = useState(false)



    const editForm =(
        <form className='edit-bio-form' action="" onSubmit= {(e) => updateUserDetails(e)}>
             <input type="text" id='' name= 'nameOfUser' placeholder='Your Name'  />
             <input type="text" id='' name='aboutUser' placeholder='About You'  />
            <br />
            <button type='button' className='cancel-button' >Cancel</button>
            <button  type='submit' onClick= {() => setEditFormIsOpen ? '' : editForm} >Save</button>
        </form>
    )

    return (
        <section className="bio">
            <div className="profile-photo" role='button' title='Click to edit photo'>
                <img src={profileIcon} alt="Profile"  />
            </div>

            <div className="profile-info"> 
                <p className="name">{userDetails.name}</p>
                <p className="about">{userDetails.about}</p>
               
                {editFormIsOpen ? editForm :  <button className="save-button" onClick={() => setEditFormIsOpen(true)}>Edit</button>}
            </div>
        </section>
    )

  }

  export default Bio