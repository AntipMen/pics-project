import React from "react";
import { Header } from "./components/header";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Intro } from "./components/intro";
import { MainBlock } from "./components/main";
import { Cookies } from "./components/footer/cookies";
import { Chat } from "./components/chat";
import "./fonts.css";
import { FooterBlock } from "./components/footer";

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Header />
      <Intro />
      <MainBlock />
      <FooterBlock />
      <Chat />
      <Cookies />
    </Router>
  );
}

export default App;
