import styled from "styled-components";

export const Card = styled.div`
  border-radius: 2px;
  display: flex;
  min-height: 300px;
  height: fit-content;
  margin: 1rem;
  position: relative;
  width: 80%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  max-width: 800px;
  flex-direction: column;
`;

//////////////////////////////////////////
export const InfoCardTitle = styled.div`
  top: 0;
  display: flex;

  width: 87%;
  height: fit-content;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  color: black;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
`;

export const InfoCardBottom = styled.div`
  bottom: 20%;
  display: flex;
margin-top: 20px;
  width: 100%;
  height: 50px;
  flex: direction: row;
  justify-content: flex-end;
   align-content: flex-end;
  
  
`;

export const InfoCardButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #ff8c00;

  color: white;
  padding: 2px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  cursor: pointer;
  outline: none;
  margin: 5px;
  height: 40px;
  &:hover {
    background-color: #c55d00;
  }
`;

export const InfoCardContent = styled.div`
  display: flex;

  width: 100%;
  height: 200px;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
`;

export const InfoCardDetails = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100px;
  height: 100px;
  background-color: orange;
  margin: 10px;
`;
export const InfoCardDescription = styled.div``;

export const InfoCardStatusInfo = styled.div``;
