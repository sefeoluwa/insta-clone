  import profileIcon from '../assets/profileIcon.svg'
  import { useState, useEffect } from 'react'
  import getPhotoUrl from 'get-photo-url'
  import { db } from '../dexie'
  
  const Bio = () => {
    // Rendering edit form with the edit button conditionally
    const editButton = <button className="save-button" onClick={() => setEditFormIsOpen(true)}>Edit</button>
     const [editFormIsOpen, setEditFormIsOpen] = useState(false)


    //  Functions to get the details of the user and render it to the bio
     const [userDetails, setUserDetails] = useState({
        name: 'Sefeoluwa Akinbeye',
        about: 'Self-taught Frontend Developer.'
    })
    const updateUserDetails = async (e) => {
        e.preventDefault()
        const objectData = {
            name: e.target.nameOfUser.value,
            about: e.target.aboutUser.value,
        }
        setUserDetails(objectData)

        // Update bio content in storage
      await  db.bio.put(objectData, 'info')

        setEditFormIsOpen(false)
    }
    // GEt the bio data from index and save it to user details
    useEffect(() => {
        const setDataFromDb = async () => {
            const userDetailsFromDb = await db.bio.get('info');
          userDetailsFromDb &&  setUserDetails(userDetailsFromDb);
          const profilePhotoFromDb = await db.bio.get('profilePhoto')
          profilePhotoFromDb && setProfilePhoto(profilePhotoFromDb)
        }
        setDataFromDb()
    }, [])

    // changing profile photo
    const [profilePhoto, setProfilePhoto] = useState(profileIcon)

    const updateProfilePhoto = async () => {
        const newProfilePhoto = await getPhotoUrl('#profilePhotoInput')
        setProfilePhoto(newProfilePhoto)
        await db.bio.put(newProfilePhoto, 'profilePhoto')
    }
    
    // Bio form 
    const editForm =(
        <form className='edit-bio-form' action="" onSubmit= {(e) => updateUserDetails(e)}>
             <input type="text" id='' name= 'nameOfUser' placeholder='Your Name' defaultValue={userDetails?.name}  />
             <input type="text" id='' name='aboutUser' placeholder='About You' defaultValue={userDetails?.about}   maxLength="100"/>
            <br />
            <button type='button' className='cancel-button' onClick= {() => setEditFormIsOpen(false)}>Cancel</button>
            <button  type='submit' >Save</button>
        </form>
    )

   
    return (
        <section className="bio">
        <input type="file" accept='image/*' name='photo' id='profilePhotoInput' />
        <label htmlFor="profilePhotoInput" onClick= {updateProfilePhoto} >
        <div className="profile-photo" role='button' title='Click to edit photo'>
                <img src={profilePhoto} alt="Profile"  />
            </div>
        </label>
          

            <div className="profile-info"> 
                <p className="name">{userDetails.name}</p>
                <p className="about">{userDetails.about}</p>
               
                {editFormIsOpen ? editForm :  editButton}
            </div>
        </section>
    )

  }

  export default Bio