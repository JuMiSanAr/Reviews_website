import React from 'react';
import styled from 'styled-components';



const Button = styled.button`

`;

const FileUploader = props => {  
  const hiddenFileInput = React.useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 



  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };  
  
    return (
        <>
        <Button onClick={handleClick}>
            Upload a file
        </Button>
        <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
            style={{display: 'none'}}
        />
        </>
    );
};
export default FileUploader;