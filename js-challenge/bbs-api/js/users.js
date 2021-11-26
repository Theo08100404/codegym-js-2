const getToken = localStorage.getItem("token");
const fetchUpdate = document.getElementById("fetchUpdate");
const upBtn = document.querySelector(".upBtn");
const desBtn = document.querySelector(".desBtn");

//更新
const postUpgrade = () => {
  const formUpdate = new FormData(fetchUpdate);
  const inputBio = formUpdate.get("bio");

  fetch("http://localhost/users", {
    method: "PATCH",
    headers: {
      Authorization: "Bearer\t" + getToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      bio: inputBio,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("失敗しました");
    });
};

//削除
const postDestoroy = () => {
  fetch("http://localhost/users", {
    method: "DELETE",
    headers: {
      Authorization: "Bearer\t" + getToken,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("失敗しました");
    });
};

//更新ボタンを押した時関数を呼ぶ
upBtn.addEventListener("click", postUpgrade, false);
//削除ボタンを押した時間数を呼ぶ
desBtn.addEventListener("click", postDestoroy, false);
