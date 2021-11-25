const fetchLogout = document.querySelector(".fetchLogout");
const logout = document.querySelector(".logout");
const getToken = localStorage.getItem("token")
const fetchUsers = document.querySelector(".fetchUsers");
const usersList = document.querySelector(".users");
const usersIdGet = document.getElementById("usersIdGet");
const IdGetBtn = document.getElementById("usersIdGetSubmit");
const move = document.getElementById("moveUser");

//ログアウトを押されたときのアクション
const postLogout = () => {
    fetch("http://localhost/logout",
        {
            method: "POST",
            headers: {
                Authorization: "Bearer\t" + getToken
            }
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const destroy = localStorage.removeItem("token", data.token);
            window.location = "file:///Users/taiyoaragane/git/codegym-js-2/js-challenge/bbs-api/register.html"
        })

};

//ユーザー情報確保
const getUsers = () => {
    fetch("http://localhost/users",
        {
            method: "GET",
            headers: {
                Authorization: "Bearer\t" + getToken
            }
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);

        })
};

const getUsersID = () => {
    const formId = new FormData(usersIdGet);
    const ID = (formId.get('number'));
    const url = "http://localhost/users/" + ID;
    fetch(url,
        {
            method: "GET",
            headers: {
                Authorization: "Bearer\t" + getToken
            }
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);

        })
};

const moveUpdate = () => {
    window.location = "file:///Users/taiyoaragane/git/codegym-js-2/js-challenge/bbs-api/users.html";
};

logout.addEventListener('click', postLogout, false);
usersList.addEventListener('click', getUsers, false);
IdGetBtn.addEventListener('click', getUsersID, false);
move.addEventListener("click", moveUpdate, false);
