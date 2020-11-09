import styled from "styled-components";

export const SidebarNavigation = styled.div`
  margin: 0;
  padding: 0;
  width: 250px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    position: relative;
  }
`;

export const SidebarButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  width: 230px;
  height: 50px;
  padding-left: 20px;
  &:hover {
    background-color: #ff8c00;
  }
`;

export const SidebarButtonText = styled.div`
  padding-left: 10px;
`;

export const SidebarInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
  text-align: center;
`;
export const PageContent = styled.div`
  margin-left: 250px;
  height: 100%;
  margin-bottom: 80px;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;
export const PageContentItems = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;
