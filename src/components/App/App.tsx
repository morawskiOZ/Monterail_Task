import React from "react"
import "./App.scss"
import MainForm from "../MainForm/MainForm"
import Header from "components/Header/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainForm />
    </div>
  )
}

export default App
