import { useState, useEffect } from 'react'
import {addStory,updateImgUrl} from '../store/story.actions.js';
import {newStory} from '../assets/services.js/story-service.js';
import {uploadService} from '../assets/services.js/upload.service.js';


export function ImgUploader({ onUploaded = null }) {
  const [imgData, setImgData] = useState(null)
  const [isUploading, setIsUploading] = useState(false)

 useEffect(() => {
  if(imgData){
    let story = {...newStory, postImg: imgData}
    addStory(story);
  }else{

  }
 },[imgData])

  async function uploadImg(ev) {
    setIsUploading(true)
    let secure_url = await uploadService(ev)
    setImgData(secure_url)
    setIsUploading(false)
    onUploaded && onUploaded(secure_url)
    updateImgUrl(secure_url)
  }

  function getUploadLabel() {
    if (imgData) return 'Upload Another?'
    return isUploading ? 'Uploading....' : 'Upload Image'
  }

  return (
    <div className="upload-preview">
      {imgData && <img src={imgData} style={{ maxWidth: '200px', float: 'right' }} />}
      <label htmlFor="imgUpload">{getUploadLabel()}</label>
      <input type="file" onChange={uploadImg} accept="img/*" id="imgUpload" />
    </div>
  )
}