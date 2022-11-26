//defining vars.
console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isGameover = false;

//function to change turn
const changeTurn = () => {
	return turn === "X" ? "0" : "X";
};

//function to check win
const checkWin = () => {
	let boxtexts = document.getElementsByClassName("boxtext");
	let wins = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	wins.forEach((e) => {
		if (
			boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
			boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
			boxtexts[e[0]].innerText !== ""
		) {
			document.querySelector(".info").innerText =
				boxtexts[e[0]].innerText + " Won" + ". Reset to Play another game!";
			isGameover = true;
			document
				.querySelector(".imgbox")
				.getElementsByTagName("img")[0].style.width = "200px";
		}
		// else if (e.innerText !== " ") {
		// 	isGameover = true;
		// 	document.querySelector(".info").innerText =
		// 		"No Winner! Its a Draw. Reset to Restart!";
		// }
	});
};

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((e) => {
	let boxtext = e.querySelector(".boxtext");
	e.addEventListener("click", () => {
		if (isGameover == false) {
			if (boxtext.innerText === "") {
				boxtext.innerText = turn;
				turn = changeTurn();
				audioturn.currentTime = 0;
				audioturn.play();
				checkWin();
				if (!isGameover) {
					document.getElementsByClassName("info")[0].innerText =
						"Turn for " + turn;
				}
			}
		}
	});
});

//Reset button
let Reset = document.getElementById("reset");
Reset.addEventListener("click", () => {
	let boxtexts = document.querySelectorAll(".boxtext");
	Array.from(boxtexts).forEach((element) => {
		element.innerText = "";
	});
	turn = "X";
	isGameover = false;
	document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
	document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
		"0px";
});
