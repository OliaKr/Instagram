import { useState } from 'react';
import { updateImgUrl } from '../store/story.actions.js';
import { useSelector } from 'react-redux';
import { uploadService } from '../assets/services.js/upload.service.js';
export function ImgUploader({ onUploaded = null, changeImage }) {
  // const [isUploading, setIsUploading] = useState(false);
  const updatedImgUrl = useSelector(
    (storeState) => storeState.storyModule.updatedImgUrl
  );

  async function uploadImg(ev) {
    console.log(ev);
    // setIsUploading(true);
    let secure_url = await uploadService(ev);
    // setIsUploading(false);
    onUploaded && onUploaded(secure_url);
    updateImgUrl(secure_url);
  }

  return (
    <div className='upload-preview'>
      {/* {updatedImgUrl && (
        <img
          src={updatedImgUrl[0]}
          style={{ maxWidth: '200px', float: 'right' }}
        />
      )} */}
      <button
        style={{
          backgroundColor: '#1877F2',
          color: 'white',
          height: '32px',
          width: '169px',
          borderRadius: '8px',
          marginTop: '24px',
        }}
      >
        <label htmlFor='imgUpload'>
          {changeImage ? 'Replace Image' : 'Select from computer'}
        </label>
      </button>
      <input
        type='file'
        hidden
        multiple
        size='60'
        onChange={uploadImg}
        accept='img/*'
        id='imgUpload'
      />
    </div>
  );
}
