import styled from "styled-components";

export const Logo = styled.div`
  width: 200px;
  height: 50px;
  text-align: center;
  padding: 1%;
  font-size: 30px;
  margin-left: 50px;
`;

export const Menu = styled.div`
  width: 100px;
  height: 50px;
  font-size: 25px;
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  margin-top: 30px;
`;

export const InputD = styled.div`
  width: 1000px;
  height: 50px;
  margin: 0 auto;
  padding: 0;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
`;

export const Select = styled.select`
  width: 17%;
  border: 5px solid #2d1582;
  font-size: 25px;
  padding: 5px;
  :focus {
    outline: none;
  }
`;

export const Input = styled.input`
  width: 60%;
  border: 5px solid #2d1582;
  font-size: 25px;
  padding-left: 10px;

  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 18%;
  border: 1px solid #2d1582;
  background: #2d1582;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  margin: 0 10px;
  box-sizing: border-box;
  padding: 0px;
`;

export const Body = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
`;

export const IndexBox = styled.div`
  width: 50%;
  height: 700px;
  padding: 50px 50px;
  box-sizing: border-box;
`;

export const Title = styled.div`
  width: 100%;
  padding: 2%;
  box-sizing: border-box;
  color: #010101;
  font-size: 30px;
  font-weight: bold;
`;

export const List = styled.div`
  height: 380px;
  width: 100%;
  padding: 1%;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const SearchList = styled.div`
  height: auto;
  width: 1200px;
  padding: 5px;
  margin: 0 auto;
  margin-top: 50px;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  margin: 12px;
  margin-top: 15px;
`;

export const BkBox = styled.div`
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

export const BlockInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
  width: 120px;
  margin-left: 20px;
`;

export const BlockNumber = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const BlockTime = styled.div`
  font-size: 12px;
  color: gray;
`;

export const Miner = styled.div`
  display: inline-block;
  text-overflow: ellipsis;
  width: 300px;
  height: 40px;
  margin-left: 10px;
  font-size: 17px;
  color: #393939;
  overflow: hidden;
`;

export const RewardValue = styled.div`
  font-size: 13px;
  width: 100px;
  height: 20px;
  color: gray;
  background-color: skyblue;
  text-align: right;
  line-height: 20px;
  margin-left: 20px;
`;

export const TxBox = styled.div`
  line-height: 45px;
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
  width: 200px;
  height: 40px;
  font-size: 17px;
  color: gray;
  overflow: hidden;
  margin-left: 20px;
  line-height: 40px;
`;

export const Tx = styled.div`
  width: 200px;
  height: 40px;
  margin-left: 20px;
`;

export const FromBox = styled.div`
  display: flex;
  /* width: 200px; */
  height: 20px;
  font-size: 17px;
`;

export const FromTo = styled.span`
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #393939;
  margin-left: 20px;
  width: 300px;
  height: 20px;
  font-size: 17px;
`;

export const AllBlocks = styled.div`
  height: auto;
  width: 1500px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  box-sizing: border-box;
`;
