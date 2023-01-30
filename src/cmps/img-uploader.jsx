import { useState } from 'react';
import { updateImgUrl } from '../store/story.actions.js';
import { useSelector } from 'react-redux';

import { uploadService } from '../assets/services.js/upload.service.js';

export function ImgUploader({ onUploaded = null }) {
  const [isUploading, setIsUploading] = useState(false);
  const updatedImgUrl = useSelector(
    (storeState) => storeState.storyModule.updatedImgUrl
  );

  async function uploadImg(ev) {
    setIsUploading(true);
    let secure_url = await uploadService(ev);
    setIsUploading(false);
    onUploaded && onUploaded(secure_url);
    updateImgUrl(secure_url);
  }

  function getUploadLabel() {
    if (updatedImgUrl?.length) return 'Upload Another?';
    return isUploading ? 'Uploading....' : 'Upload Image';
  }

  return (
    <div className='upload-preview'>
      {updatedImgUrl && (
        <img
          src={updatedImgUrl[0]}
          style={{ maxWidth: '200px', float: 'right' }}
        />
      )}
      <label htmlFor='imgUpload'>{getUploadLabel()}</label>
      {/* <label
        for='file'
        style={{
          backgroundColor: '#1877F2',
          color: 'white',
          height: '32px',
          width: '169px',
        }}
      >
        Select from computer
      </label> */}
      <input
        type='file'
        multiple
        size='60'
        onChange={uploadImg}
        accept='img/*'
        id='imgUpload'
      />
    </div>
  );
}
