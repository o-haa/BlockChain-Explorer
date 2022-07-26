import styled from "styled-components";

export const SearchList = styled.div`
  height: auto;
  width: 1200px;
  padding: 5px;
  margin: 0 auto;
  margin-top: 10px;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const SContent = styled.div`
  display: flex;
  margin: 12px;
  margin-top: 5px;
`;

export const SBkBox = styled.div`
  padding-top: 10px;
  box-sizing: border-box;
  width: 45px;
  height: 45px;
  border-radius: 20%;
  background-color: #2d1582;
  text-align: center;
  color: #fff;
  font-weight: bold;
`;

export const SBlockInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
  margin-left: 50px;
`;

export const SBlockNumber = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 100px;
  text-align: center;
`;

export const BlockTime = styled.div`
  font-size: 12px;
  color: gray;
  text-align: center;
`;

export const SMiner = styled.div`
  display: inline-block;
  text-overflow: ellipsis;
  height: 40px;
  margin-left: 50px;
  font-size: 17px;
  color: #393939;
  overflow: hidden;
  width: 500px;
`;

export const SRewardValue = styled.div`
  font-size: 12px;
  width: 100px;
  height: 20px;
  color: gray;
  background-color: skyblue;
  text-align: right;
  margin-left: 40px;
`;

export const TxBox = styled.div`
  padding-top: 2%;
  box-sizing: border-box;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background-color: #2d1582;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

export const Hashes = styled.div`
  display: inline-block;
  text-overflow: ellipsis;
  width: 300px;
  height: 40px;
  font-size: 17px;
  color: gray;
  overflow: hidden;
  margin-left: 40px;
  line-height: 40px;
`;

export const Tx = styled.div`
  height: 40px;
  margin-left: 40px;
`;

export const FromBox = styled.div`
  display: flex;
  height: 20px;
  font-size: 17px;
`;

export const FromTo = styled.span`
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #393939;
  margin-left: 50px;
  height: 20px;
  font-size: 17px;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const NavButton = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  color: #2d1582;
  background: none;
  font-weight: bold;
  cursor: pointer;

  &[disabled] {
    color: gray;
    cursor: revert;
    transform: revert;
  }
`;

export const NumberButton = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  background: #2d1582;
  color: #fff;
  margin: 2px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[aria-current] {
    background: #fff;
    color: #000;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;
