
export const uploadService = async(ev) => {
  const CLOUD_NAME = "dsinv9pik"
  const UPLOAD_PRESET = "Oliakra"
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
  const FORM_DATA = new FormData();

  const formData = new FormData()
  // formData.append('upload_preset', UPLOAD_PRESET)
  // formData.append('file', ev.target.files[0])
  FORM_DATA.append('file', ev.target.files[0])
  FORM_DATA.append('upload_preset', UPLOAD_PRESET);

  // return fetch(UPLOAD_URL, {
  //   method: 'POST',
  //   body: formData
  // })
  //   .then(res => res.json())
  //   .then(res => {
  //     return res
  //   })
  //   .catch(err => console.error(err))

  try {
    const res = await fetch(UPLOAD_URL, {
        method: 'POST',
        body: FORM_DATA
    })
    const elImg = document.createElement('img');
    const { url } = await res.json()
  
   return url
} catch (err) {
    console.error(err)
}
}
