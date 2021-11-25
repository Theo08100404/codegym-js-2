'use strict';

const p = console.log;
const host = 'http://localhost'; //ローカルで掲示板を動かす場合の設定

//以下にコードを書きましょう。
const fetchForm = document.getElementById("fetchRegister");
const btn = document.querySelector('.btn');

const postRegister = () => {
    const formData = new FormData(fetchForm);
    fetch("http://localhost/register",
        {
            method: "POST",
            body: formData
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log("失敗しました")
        })
};

//ログインボタンを押した時のアクション
const fetchLogin = document.getElementById("fetchLogin");
const login = document.getElementById("loginSubmit");

const postLogin = () => {
    const loginData = new FormData(fetchLogin)
    fetch("http://localhost/login",
        {
            method: "POST",
            body: loginData
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            let save = localStorage.setItem("token", data.token);
            if (data.status === undefined) {
                window.location = "file:///Users/taiyoaragane/git/codegym-js-2/js-challenge/bbs-api/main.html"
            }
        })


};

btn.addEventListener('click', postRegister, false);
login.addEventListener('click', postLogin, false);



