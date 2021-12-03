const getToken = localStorage.getItem("token");
const threadsUpdate = document.getElementById("threadsUpdate");
const upBtn = document.querySelector(".upBtn");

//更新
const changeTitle = () => {
  const getUpdate = new FormData(threadsUpdate);
  const inputNumber = getUpdate.get("number");
  const inputTitle = getUpdate.get("title");
  fetch("http://localhost/threads/" + inputNumber, {
    method: "PATCH",
    headers: {
      Authorization: "Bearer\t" + getToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: inputTitle,
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
upBtn.addEventListener("click", changeTitle, false);
