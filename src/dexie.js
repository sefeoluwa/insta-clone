import Dexie from 'dexie'

export const db = new Dexie('insta-clone')
db.version(1).stores({
    bio: ',name,about',
    gallery: '++id,url'
})

 