'use strict'

import {getNews, createPost} from "./helpers/_getNews.js";

const title = document.querySelector("title").text
const sectionNews = document.querySelector("#news-row");
const postArticle = document.querySelector("#create-post");

if(title === "New's Channel26"){
    getNews(sectionNews);
    createPost(postArticle, sectionNews);
}