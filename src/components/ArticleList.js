import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    console.log(posts)
    return(
        <React.Fragment>
            <div>
            <main>
            {posts.map((article)=>{
                return <Article key = {article.id} date = {article.date} preview = {article.preview} title = {article.title} />
            })}
            </main>
            </div>
        </React.Fragment>
    )
}

export default ArticleList;