import styled from "styled-components";

export const BottomNavigation = styled.div`
  display: flex;
  overflow: hidden;
  background-color: #f1f1f1;
  position: fixed;
  bottom: 0;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  min-height: 70px;
`;

export const BottomNavButton = styled.div`
  display: flex;
  flex: 1;
  height: 70px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2.7vw;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #ff8c00;
  }
`;
