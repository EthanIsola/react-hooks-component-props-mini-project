import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "/home/ethanisola/Development/code/phase-2/react-hooks-component-props-mini-project/src/components/ArticleList.js";
import blogData from "../data/blog";


function App() {
  return (
    <div className="App">
      <Header name = {blogData.name}/>
      <About image = {blogData.image} about = {blogData.about} />
      <ArticleList posts = {blogData.posts} />
    </div>
  );
}

export default App;
