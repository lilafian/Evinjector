const EVI_Version = "v1.0";
const EVC_Version = "v1.0";

let EVI_Menu = document.createElement("div");
EVI_Menu.style.width = "800px";
EVI_Menu.style.height = "100px";
EVI_Menu.style.backgroundColor = "#171717";
EVI_Menu.style.position = "fixed";
EVI_Menu.style.zIndex = "999999";
EVI_Menu.style.left = "15px";
EVI_Menu.style.top = "15px";
EVI_Menu.style.border = "2px solid pink";
EVI_Menu.style.borderRadius = "10px";
EVI_Menu.style.boxShadow = "0 0 0 max(100vh, 100vw) rgba(0, 0, 0, .3)";
EVI_Menu.style.opacity = "0";

let EVI_CloseBTN = document.createElement("button");
EVI_CloseBTN.innerHTML = "X";
EVI_CloseBTN.style.backgroundColor = "#00000000";
EVI_CloseBTN.style.borderRadius = "5px";
EVI_CloseBTN.style.color = "white";
EVI_CloseBTN.style.border = "2px pink solid";
EVI_CloseBTN.style.position = "absolute";
EVI_CloseBTN.style.right = "5px";
EVI_CloseBTN.style.top = "5px";
EVI_CloseBTN.addEventListener("click", ()=>{
	EVI_Menu.remove();
});

let EVI_TitleText = document.createElement("h1");
EVI_TitleText.innerHTML = "Evinjector";
EVI_TitleText.style.fontFamily = "sans-serif";
EVI_TitleText.style.fontSize = "25px";
EVI_TitleText.style.position = "absolute";
EVI_TitleText.style.left = "10px";
EVI_TitleText.style.top = "10px";
EVI_TitleText.style.margin = "0";
EVI_TitleText.style.background = "linear-gradient(to right, pink, white)";
EVI_TitleText.style.WebkitBackgroundClip = "text";
EVI_TitleText.style.WebkitTextFillColor = "transparent";

let EVI_SubTitleText = document.createElement("h2");
EVI_SubTitleText.innerHTML = EVI_Version;
EVI_SubTitleText.style.fontFamily = "sans-serif";
EVI_SubTitleText.style.fontSize = "15px";
EVI_SubTitleText.style.position = "absolute";
EVI_SubTitleText.style.left = "10px";
EVI_SubTitleText.style.top = "35px";
EVI_SubTitleText.style.margin = "0";
EVI_SubTitleText.style.background = "linear-gradient(to right, gray, white)";
EVI_SubTitleText.style.WebkitBackgroundClip = "text";
EVI_SubTitleText.style.WebkitTextFillColor = "transparent";

let opacity = 0;
  	let fadeIn = setInterval(() => {
   	  if (opacity >= 1) {
  		  clearInterval(fadeIn);
   	  }
   	  EVI_Menu.style.opacity = opacity;
   	  opacity += 0.1;
  	}, 1);

let EVI_CodeBox = document.createElement("input");
EVI_CodeBox.style.width = "97.3%";
EVI_CodeBox.style.position = "absolute";
EVI_CodeBox.style.top = "55px";
EVI_CodeBox.style.left = "10px";
EVI_CodeBox.style.fontFamily = "monospace";
EVI_CodeBox.placeholder = "Enter your JavaScript here - [ENTER] to inject into page";
EVI_CodeBox.addEventListener('keypress', (event)=> {
	if (event.key === "Enter") {
  	  let temp = document.createElement("script");
  	  temp.innerHTML = EVI_CodeBox.value;
  	  document.body.appendChild(temp);
  	  setTimeout(()=>{
     	  temp.remove();
  	  }, 10000);
	}
});

let EVI_EVC_Menu = document.createElement("div");
EVI_EVC_Menu.style.width = "800px";
EVI_EVC_Menu.style.height = "100px";
EVI_EVC_Menu.style.backgroundColor = "#171717";
EVI_EVC_Menu.style.position = "fixed";
EVI_EVC_Menu.style.zIndex = "999999";
EVI_EVC_Menu.style.right = "15px";
EVI_EVC_Menu.style.top = "15px";
EVI_EVC_Menu.style.border = "2px solid pink";
EVI_EVC_Menu.style.borderRadius = "10px";
EVI_EVC_Menu.style.opacity = "1";

let EVI_EVC_TitleText = document.createElement("h1");
EVI_EVC_TitleText.innerHTML = "Evalculator";
EVI_EVC_TitleText.style.fontFamily = "sans-serif";
EVI_EVC_TitleText.style.fontSize = "25px";
EVI_EVC_TitleText.style.position = "absolute";
EVI_EVC_TitleText.style.left = "10px";
EVI_EVC_TitleText.style.top = "10px";
EVI_EVC_TitleText.style.margin = "0";
EVI_EVC_TitleText.style.background = "linear-gradient(to right, pink, white)";
EVI_EVC_TitleText.style.WebkitBackgroundClip = "text";
EVI_EVC_TitleText.style.WebkitTextFillColor = "transparent";

let EVI_EVC_SubTitleText = document.createElement("h2");
EVI_EVC_SubTitleText.innerHTML = EVC_Version;
EVI_EVC_SubTitleText.style.fontFamily = "sans-serif";
EVI_EVC_SubTitleText.style.fontSize = "15px";
EVI_EVC_SubTitleText.style.position = "absolute";
EVI_EVC_SubTitleText.style.left = "10px";
EVI_EVC_SubTitleText.style.top = "35px";
EVI_EVC_SubTitleText.style.margin = "0";
EVI_EVC_SubTitleText.style.background = "linear-gradient(to right, gray, white)";
EVI_EVC_SubTitleText.style.WebkitBackgroundClip = "text";
EVI_EVC_SubTitleText.style.WebkitTextFillColor = "transparent";

let EVI_EVC_CloseBTN = document.createElement("button");
EVI_EVC_CloseBTN.innerHTML = "X";
EVI_EVC_CloseBTN.style.backgroundColor = "#00000000";
EVI_EVC_CloseBTN.style.borderRadius = "5px";
EVI_EVC_CloseBTN.style.color = "white";
EVI_EVC_CloseBTN.style.border = "2px pink solid";
EVI_EVC_CloseBTN.style.position = "absolute";
EVI_EVC_CloseBTN.style.right = "5px";
EVI_EVC_CloseBTN.style.top = "5px";
EVI_EVC_CloseBTN.addEventListener("click", ()=>{
	EVI_EVC_Menu.remove();
});

let EVI_EVC_EquationBox = document.createElement("input");
EVI_EVC_EquationBox.style.width = "97.3%";
EVI_EVC_EquationBox.style.position = "absolute";
EVI_EVC_EquationBox.style.top = "55px";
EVI_EVC_EquationBox.style.left = "10px";
EVI_EVC_EquationBox.style.fontFamily = "monospace";
EVI_EVC_EquationBox.placeholder = "Enter your equation here - [ENTER] to calculate - * for multiplication - / for division";
EVI_EVC_EquationBox.addEventListener('keypress', (event)=> {
	if (event.key === "Enter") {
        window.alert(new Function('return ' + EVI_EVC_EquationBox.value)());
	}
});

let EVI_CalcBTN = document.createElement("button");
EVI_CalcBTN.innerHTML = "C";
EVI_CalcBTN.style.backgroundColor = "#00000000";
EVI_CalcBTN.style.borderRadius = "5px";
EVI_CalcBTN.style.color = "white";
EVI_CalcBTN.style.border = "2px pink solid";
EVI_CalcBTN.style.position = "absolute";
EVI_CalcBTN.style.right = "30px";
EVI_CalcBTN.style.top = "5px";
EVI_CalcBTN.addEventListener("click", ()=>{
	document.body.appendChild(EVI_EVC_Menu);
});

EVI_Menu.appendChild(EVI_TitleText);
EVI_Menu.appendChild(EVI_SubTitleText);
EVI_Menu.appendChild(EVI_CodeBox);
EVI_Menu.appendChild(EVI_CloseBTN);
EVI_Menu.appendChild(EVI_CalcBTN);

EVI_EVC_Menu.appendChild(EVI_EVC_TitleText);
EVI_EVC_Menu.appendChild(EVI_EVC_SubTitleText);
EVI_EVC_Menu.appendChild(EVI_EVC_EquationBox);
EVI_EVC_Menu.appendChild(EVI_EVC_CloseBTN);

document.body.appendChild(EVI_Menu);
