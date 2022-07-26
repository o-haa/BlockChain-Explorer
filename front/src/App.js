// import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import DefaultLayout from "./components/DefaultLayout";
import Index from "./pages/Index";
import AllBlock from "./pages/AllBlock";
import AllTx from "./pages/AllTx";
import Block from "./pages/Block";
import Transaction from "./pages/Transaction";
import Search from "./pages/Search";
import Account from "./pages/Account";

import "./App.css";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

function App() {
  return (
    <Wrap>
      <BrowserRouter>
        <DefaultLayout />
        <Routes>
          <Route path="/" Index element={<Index />} />
          <Route path="/block" element={<AllBlock />} />
          <Route path="/tx" element={<AllTx />} />
          <Route path="/block/:idx" element={<Block />} />
          <Route path="/tx/:hash" element={<Transaction />} />
          <Route path="/search" element={<Search />} />
          <Route path="/accounts/:address" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </Wrap>
  );
}

export default App;
