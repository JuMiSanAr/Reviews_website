import React from 'react';
import styled from 'styled-components';



const Button = styled.button`
    background-color: #E47D31;
    margin-top: 5px;
    margin-bottom: 20px;
    margin-left: 20px;
    padding: 15px 30px;
    width: 259px;
    height: 56px;
    align-self: center;
    border-radius: 28px;
    color: #fff;
    border: none;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s;

    :hover {
        box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.4);
        transform: scale(1.05) translateY(-5px);
`;

const FileUploader = props => {  
  const hiddenFileInput = React.useRef(null);

  const handleClick = event => {
      event.preventDefault()
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.setImage(fileUploaded);
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