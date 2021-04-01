import styled from "styled-components";

export const MainContainer = styled.div `
    min-height: 90vh;
`;

export const SearchSelectContainer = styled.div `
    height: 50px;
    min-width:100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 10px;
    box-sizing: content-box;
    border: 1px solid #EBEBEB;
    background-color: white;
`;

export const SelectCategory = styled.div `
    margin-right: 10px;
    display: flex;
    justify-content:center;
    align-items: center;

  
    span{
        border-left: 1px solid #D8D8D8;
        height: 50px;
        
    }
    select{
        margin-right: 10px;
        border-style: none;
        color: #D8D8D8;
        outline:none;
    }

`;
export const SearchBox = styled.div`
    margin-left: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    input{
        width: 50vw;
        background: #FFFFFF;
        border-radius: 5px;
        border-style:none;
        outline: none;
        padding-left: 10px;
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 20px;
    } 
     @media (max-width: 768px) {
        input{
        width: 20vw;
        }
  }  
`;
export const TabsContainer = styled.div`
/*    width: 80vw; */
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    margin: 20px 0 40px 0;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
    color: #4C4C4C;
    span{
        width: 500px;
        border-bottom: 1px solid #EBEBEB;
    }
    .reviewtitle{
        display: flex;
        flex-wrap:wrap;
        cursor: pointer;
        div{
        margin: 0 80px 0 0;
            :hover {
                padding-bottom: 10px;
                border-bottom: 3px solid #E47D31;
            }
        } 
    }       
`;

export const ResCardContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;    
    .content {
            display: none;
        }
    .active-content {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            flex-wrap: wrap;
        }

`;

export const ContentWrapper = styled.div`
    margin: auto;
    max-width: 80vw; 
`;