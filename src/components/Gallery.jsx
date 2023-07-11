import { useState } from 'react'

const Gallery = () => {
     const [allPhotos, setAllPhotos] = useState([])

    return (
        <>
        <input type="file" name='photo' id='addPhotoInput' />
        <label htmlFor="addPhotoInput">
            <i className='add-photo-button fas fa-plus-square'></i>
        </label>

        <section className="gallery">
        {allPhotos.map((photo) => {
          <div className="item" key={photo.id}>
                 <img src={photo.url} alt="gallery "  className="item-image" />
                 <button className="delete-button">Delete</button>
            </div>
        })}
      </section>
        </>
    )
}

export default Gallery