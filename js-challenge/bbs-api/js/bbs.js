const fetchLogout = document.querySelector(".fetchLogout");
const logout = document.querySelector(".logout");
const getToken = localStorage.getItem("token");
const fetchUsers = document.querySelector(".fetchUsers");
const usersList = document.querySelector(".users");
const usersIdGet = document.getElementById("usersIdGet");
const IdGetBtn = document.getElementById("usersIdGetSubmit");
const move = document.getElementById("moveUser");
const getThreadsBtn = document.getElementById("getThreadsBtn");
const fetchThreads = document.getElementById("makeThreads");
const makethreadsBtn = document.getElementById("makeThreadsBtn");
const getThereadsNumber = document.getElementById("getThreadsNunmber");
const getThreadsNunmberBtn = document.getElementById("getThreadsNunmberBtn");
const moveThreads = document.getElementById("moveThreads");

//ログアウトを押されたときのアクション
const postLogout = () => {
  fetch("http://localhost/logout", {
    method: "POST",
    headers: {
      Authorization: "Bearer\t" + getToken,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const destroy = localStorage.removeItem("token", data.token);
      window.location = "../html/register.html";
    });
};

//ユーザー情報確保
const getUsers = () => {
  fetch("http://localhost/users", {
    method: "GET",
    headers: {
      Authorization: "Bearer\t" + getToken,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

const getUsersID = () => {
  const formId = new FormData(usersIdGet);
  const ID = formId.get("number");
  const url = "http://localhost/users/" + ID;
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Bearer\t" + getToken,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

const moveUpdate = () => {
  window.location = "../html/users.html";
};

//スレッド作成ボタンを押した時のアクション
const makeThreads = () => {
  const threadsName = new FormData(fetchThreads);
  fetch("http://localhost/threads", {
    method: "POST",
    headers: {
      Authorization: "Bearer\t" + getToken,
    },
    body: threadsName,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

//スレッド取得を押した時のアクション
const getThereads = () => {
  fetch("http://localhost/threads?per_page=10", {
    method: "GET",
    headers: {
      Authorization: "Bearer\t" + getToken,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.data[0].title);
      for (let i = 0; i < data.data.length; i++) {
        console.log(data.data[i].title);
        let element = document.createElement("p");
        let text = data.data[i].title;
        document
          .getElementById("threadsTitle")
          .appendChild(element)
          .appendChild(document.createTextNode(text));
      }
    });
};

//選んだIDのスレッドを取得を押した時のアクション
const getThreadsID = () => {
  const threadsId = new FormData(getThereadsNumber);
  const Number = threadsId.get("number");
  const url = "http://localhost/threads/" + Number;
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Bearer\t" + getToken,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

//スレッド情報を編集するを押した時のアクション
const moveThreadsUpdate = () => {
  window.location = "../html/threadsUpdate.html";
};

logout.addEventListener("click", postLogout, false);
usersList.addEventListener("click", getUsers, false);
IdGetBtn.addEventListener("click", getUsersID, false);
move.addEventListener("click", moveUpdate, false);
makethreadsBtn.addEventListener("click", makeThreads, false);
getThreadsBtn.addEventListener("click", getThereads, false);
getThreadsNunmberBtn.addEventListener("click", getThreadsID, false);
moveThreads.addEventListener("click", moveThreadsUpdate, false);
