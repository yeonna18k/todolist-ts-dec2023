import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  min-height: 20vh;
`;

export const Title = styled.div`
  padding: 10px 0;
`;
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
export const Card = styled.div`
  width: 250px;
  padding: 10px;
  margin: 10px;
  border: 2px solid #ffb6c1;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    border: 2px solid white;
    transition: 0.2s ease-in-out;
  }
`;
export const CardTitle = styled.div`
  font-weight: 900;
`;
export const CardContent = styled.div`
  font-size: 24px;
`;
export const ButtonWrapper = styled.div`
  /* float: right; */
  text-align: end;
`;
export const CardButton = styled.button`
  border: none;
  &:hover {
    cursor: pointer;
    color: white;
    transition: 0.2s ease-in-out;
  }
`;
