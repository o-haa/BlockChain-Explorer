import { Link } from "react-router-dom";
import {
  Logo,
  Menu,
  Header,
  InputD,
  Input,
  Button,
  Form,
  Select,
} from "./indexStyles";
import { search_B_request, search_H_request } from "../reducers/searchReducers";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const DefaultLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigater = () => {
    navigate("/search");
  };

  const searchHandler = (e) => {
    e.preventDefault();
    const select = e.target.select.value;
    const input = e.target.searchBlock.value;

    if (select === "BlockNumber") {
      dispatch(search_B_request(input));
    } else if (select === "txHash") {
      dispatch(search_H_request(input));
    } else if (select === "") {
      window.alert("Category를 선택해 주세요.");
    }

    document.querySelector("select").value = "";
    document.querySelector("input").value = "";
  };

  return (
    <>
      <Header>
        <div style={{ display: "flex" }}>
          <Logo>
            <Link
              to="/"
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              OHA Explorer
            </Link>
          </Logo>
          <div style={{ display: "flex", margin: "10px 0 0 850px" }}>
            <Menu>
              <Link
                to="/block"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Block
              </Link>
            </Menu>
            <Menu>
              <Link
                to="/tx"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Transaction
              </Link>
            </Menu>
          </div>
        </div>
      </Header>
      <InputD>
        <Form method="post" onSubmit={searchHandler}>
          <Select name="select">
            <option value=""> Category </option>
            <option value="BlockNumber">Block Number</option>
            <option value="txHash">Tx Hash</option>
          </Select>
          <Input
            type="text"
            placeholder="검색어를 입력해 주세요."
            name="searchBlock"
          ></Input>
          {/* <Link to="/search" style={{ color: "#fff", textDecoration: "none" }}> */}
          <Button type="submit" onClick={navigater}>
            SEARCH
          </Button>
          {/* </Link> */}
        </Form>
      </InputD>
    </>
  );
};

export default DefaultLayout;
