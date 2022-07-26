import styled from "styled-components";

export const ATitle = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: 600;
`;

export const ATable = styled.table`
  width: 100%;
  height: 40px;
  margin: 20px auto;
  font-size: 20px;
  border-collapse: collapse;
`;

export const Balance = styled.div`
  margin-top: 20px;
  height: 30px;
  font-size: 25px;
  font-weight: 600;
`;

export const ATr2 = styled.tr`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid gray;
  height: 30px;
  text-align: center;

  & > td:nth-child(1) {
    width: 300px;
  }

  & > td:nth-child(2) {
    width: 100px;
  }

  & > td:nth-child(3) {
    width: 310px;
  }

  & > td:nth-child(4) {
    width: 310px;
  }

  & > td:nth-child(5) {
    width: 100px;
  }
`;

export const ATr = styled.tr`
  display: flex;
  justify-content: space-around;
  text-align: center;
  height: 40px;
  margin-top: 10px;

  & > td:nth-child(1) {
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 300px;
    height: 40px;
    margin-top: 10px;
    line-height: 24px;
  }

  & > td:nth-child(2) {
    display: inline-block;
    width: 100px;
    height: 40px;
    line-height: 40px;
  }

  & > td:nth-child(3) {
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 300px;
    height: 40px;
    line-height: 40px;
  }

  & > td:nth-child(4) {
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 300px;
    height: 40px;
    margin-left: 5px;
    line-height: 40px;
  }

  & > td:nth-child(5) {
    display: inline-block;
    width: 100px;
    height: 40px;
    line-height: 40px;
  }
`;
