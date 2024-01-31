const EVI_Version = "v1.1",
    EVC_Version = "v1.0",
    TLS_Version = "v1.0",
    EVH_Version = "v1.0",
    EVI_PatchNotesLink = "https://docs.google.com/document/d/15IPflkRsdis5m5NTxAThCkeqSsUrF-G5UfPkIsMM4_E/edit";
let EVI_Page_HTML = (new XMLSerializer).serializeToString(document).replaceAll("<", "&lt").replaceAll(">", "&gt"),
    EVI_Menu = document.createElement("div");
EVI_Menu.style.width = "800px", EVI_Menu.style.height = "105px", EVI_Menu.style.backgroundColor = "#171717", EVI_Menu.style.position = "fixed", EVI_Menu.style.zIndex = "999999", EVI_Menu.style.left = "15px", EVI_Menu.style.top = "15px", EVI_Menu.style.border = "2px solid pink", EVI_Menu.style.borderRadius = "10px", EVI_Menu.style.boxShadow = "0 0 0 max(100vh, 100vw) rgba(0,0,0,.3)", EVI_Menu.style.opacity = "0";
let EVI_CloseBTN = document.createElement("button");
EVI_CloseBTN.innerHTML = "X", EVI_CloseBTN.style.backgroundColor = "#00000000", EVI_CloseBTN.style.borderRadius = "5px", EVI_CloseBTN.style.color = "white", EVI_CloseBTN.style.border = "2px pink solid", EVI_CloseBTN.style.position = "absolute", EVI_CloseBTN.style.right = "5px", EVI_CloseBTN.style.top = "5px", EVI_CloseBTN.addEventListener("click", (() => {
    EVI_Menu.remove()
}));
let EVI_ExecuteBTN = document.createElement("button");
EVI_ExecuteBTN.innerHTML = "E", EVI_ExecuteBTN.style.backgroundColor = "#00000000", EVI_ExecuteBTN.style.borderRadius = "5px", EVI_ExecuteBTN.style.color = "white", EVI_ExecuteBTN.style.border = "2px pink solid", EVI_ExecuteBTN.style.position = "absolute", EVI_ExecuteBTN.style.left = "5px", EVI_ExecuteBTN.style.bottom = "5px", EVI_ExecuteBTN.addEventListener("click", (() => {
    eval(EVI_CodeBox.value)
}));
let EVI_ExecuteAltBTN = document.createElement("button");
EVI_ExecuteAltBTN.innerHTML = "A", EVI_ExecuteAltBTN.style.backgroundColor = "#00000000", EVI_ExecuteAltBTN.style.borderRadius = "5px", EVI_ExecuteAltBTN.style.color = "white", EVI_ExecuteAltBTN.style.border = "2px pink solid", EVI_ExecuteAltBTN.style.position = "absolute", EVI_ExecuteAltBTN.style.left = "30px", EVI_ExecuteAltBTN.style.bottom = "5px", EVI_ExecuteAltBTN.addEventListener("click", (() => {
    let e = document.createElement("script");
    e.innerHTML = EVI_CodeBox.value, document.body.appendChild(e), setTimeout((() => {
        e.remove()
    }), 1e4)
}));
let EVI_TitleText = document.createElement("h1");
EVI_TitleText.innerHTML = "Evinjector", EVI_TitleText.style.fontFamily = "sans-serif", EVI_TitleText.style.fontSize = "25px", EVI_TitleText.style.position = "absolute", EVI_TitleText.style.left = "10px", EVI_TitleText.style.top = "10px", EVI_TitleText.style.margin = "0", EVI_TitleText.style.background = "linear-gradient(to right, pink, white)", EVI_TitleText.style.WebkitBackgroundClip = "text", EVI_TitleText.style.WebkitTextFillColor = "transparent";
let EVI_SubTitleText = document.createElement("h2");
EVI_SubTitleText.innerHTML = EVI_Version, EVI_SubTitleText.style.fontFamily = "sans-serif", EVI_SubTitleText.style.fontSize = "15px", EVI_SubTitleText.style.position = "absolute", EVI_SubTitleText.style.left = "10px", EVI_SubTitleText.style.top = "35px", EVI_SubTitleText.style.margin = "0", EVI_SubTitleText.style.background = "linear-gradient(to right, gray, white)", EVI_SubTitleText.style.WebkitBackgroundClip = "text", EVI_SubTitleText.style.WebkitTextFillColor = "transparent";
let opacity = 0,
    fadeIn = setInterval((() => {
        opacity >= 1 && clearInterval(fadeIn), EVI_Menu.style.opacity = opacity, opacity += .1
    }), 1),
    EVI_CodeBox = document.createElement("input");
EVI_CodeBox.style.width = "97.3%", EVI_CodeBox.style.position = "absolute", EVI_CodeBox.style.top = "55px", EVI_CodeBox.style.left = "10px", EVI_CodeBox.style.fontFamily = "monospace", EVI_CodeBox.placeholder = "Enter your JavaScript here - [ENTER] or press the E button to inject - Click the U button for a tutorial!", EVI_CodeBox.addEventListener("keypress", (e => {
    if ("Enter" === e.key) {
        let e = document.createElement("script");
        e.innerHTML = EVI_CodeBox.value, document.body.appendChild(e), setTimeout((() => {
            e.remove()
        }), 1e4)
    }
}));
let EVI_EVC_Menu = document.createElement("div");
EVI_EVC_Menu.style.width = "800px", EVI_EVC_Menu.style.height = "105px", EVI_EVC_Menu.style.backgroundColor = "#171717", EVI_EVC_Menu.style.position = "fixed", EVI_EVC_Menu.style.zIndex = "999999", EVI_EVC_Menu.style.right = "15px", EVI_EVC_Menu.style.top = "15px", EVI_EVC_Menu.style.border = "2px solid pink", EVI_EVC_Menu.style.borderRadius = "10px", EVI_EVC_Menu.style.opacity = "1";
let EVI_EVC_TitleText = document.createElement("h1");
EVI_EVC_TitleText.innerHTML = "Evalculator", EVI_EVC_TitleText.style.fontFamily = "sans-serif", EVI_EVC_TitleText.style.fontSize = "25px", EVI_EVC_TitleText.style.position = "absolute", EVI_EVC_TitleText.style.left = "10px", EVI_EVC_TitleText.style.top = "10px", EVI_EVC_TitleText.style.margin = "0", EVI_EVC_TitleText.style.background = "linear-gradient(to right, pink, white)", EVI_EVC_TitleText.style.WebkitBackgroundClip = "text", EVI_EVC_TitleText.style.WebkitTextFillColor = "transparent";
let EVI_EVC_SubTitleText = document.createElement("h2");
EVI_EVC_SubTitleText.innerHTML = EVC_Version, EVI_EVC_SubTitleText.style.fontFamily = "sans-serif", EVI_EVC_SubTitleText.style.fontSize = "15px", EVI_EVC_SubTitleText.style.position = "absolute", EVI_EVC_SubTitleText.style.left = "10px", EVI_EVC_SubTitleText.style.top = "35px", EVI_EVC_SubTitleText.style.margin = "0", EVI_EVC_SubTitleText.style.background = "linear-gradient(to right, gray, white)", EVI_EVC_SubTitleText.style.WebkitBackgroundClip = "text", EVI_EVC_SubTitleText.style.WebkitTextFillColor = "transparent";
let EVI_EVC_CloseBTN = document.createElement("button");
EVI_EVC_CloseBTN.innerHTML = "X", EVI_EVC_CloseBTN.style.backgroundColor = "#00000000", EVI_EVC_CloseBTN.style.borderRadius = "5px", EVI_EVC_CloseBTN.style.color = "white", EVI_EVC_CloseBTN.style.border = "2px pink solid", EVI_EVC_CloseBTN.style.position = "absolute", EVI_EVC_CloseBTN.style.right = "5px", EVI_EVC_CloseBTN.style.top = "5px", EVI_EVC_CloseBTN.addEventListener("click", (() => {
    EVI_EVC_Menu.remove()
}));
let EVI_EVC_EquationBox = document.createElement("input");
EVI_EVC_EquationBox.style.width = "97.3%", EVI_EVC_EquationBox.style.position = "absolute", EVI_EVC_EquationBox.style.top = "55px", EVI_EVC_EquationBox.style.left = "10px", EVI_EVC_EquationBox.style.fontFamily = "monospace", EVI_EVC_EquationBox.placeholder = "Enter your equation here - [ENTER] to calculate - * for multiplication - / for division", EVI_EVC_EquationBox.addEventListener("keypress", (e => {
    "Enter" === e.key && window.alert(new Function("return " + EVI_EVC_EquationBox.value)())
}));
let EVI_CalcBTN = document.createElement("button");
EVI_CalcBTN.innerHTML = "C", EVI_CalcBTN.style.backgroundColor = "#00000000", EVI_CalcBTN.style.borderRadius = "5px", EVI_CalcBTN.style.color = "white", EVI_CalcBTN.style.border = "2px pink solid", EVI_CalcBTN.style.position = "absolute", EVI_CalcBTN.style.right = "30px", EVI_CalcBTN.style.top = "5px", EVI_CalcBTN.addEventListener("click", (() => {
    document.body.appendChild(EVI_EVC_Menu)
}));
let EVI_TLS_Menu = document.createElement("div");
EVI_TLS_Menu.style.width = "300px", EVI_TLS_Menu.style.height = "500px", EVI_TLS_Menu.style.backgroundColor = "#171717", EVI_TLS_Menu.style.position = "fixed", EVI_TLS_Menu.style.zIndex = "999999", EVI_TLS_Menu.style.left = "15px", EVI_TLS_Menu.style.bottom = "15px", EVI_TLS_Menu.style.border = "2px solid pink", EVI_TLS_Menu.style.borderRadius = "10px", EVI_TLS_Menu.style.opacity = "1";
let EVI_TLS_TitleText = document.createElement("h1");
EVI_TLS_TitleText.innerHTML = "Evotools", EVI_TLS_TitleText.style.fontFamily = "sans-serif", EVI_TLS_TitleText.style.fontSize = "25px", EVI_TLS_TitleText.style.position = "absolute", EVI_TLS_TitleText.style.left = "10px", EVI_TLS_TitleText.style.top = "10px", EVI_TLS_TitleText.style.margin = "0", EVI_TLS_TitleText.style.background = "linear-gradient(to right, pink, white)", EVI_TLS_TitleText.style.WebkitBackgroundClip = "text", EVI_TLS_TitleText.style.WebkitTextFillColor = "transparent";
let EVI_TLS_SubTitleText = document.createElement("h2");
EVI_TLS_SubTitleText.innerHTML = TLS_Version, EVI_TLS_SubTitleText.style.fontFamily = "sans-serif", EVI_TLS_SubTitleText.style.fontSize = "15px", EVI_TLS_SubTitleText.style.position = "absolute", EVI_TLS_SubTitleText.style.left = "10px", EVI_TLS_SubTitleText.style.top = "35px", EVI_TLS_SubTitleText.style.margin = "0", EVI_TLS_SubTitleText.style.background = "linear-gradient(to right, gray, white)", EVI_TLS_SubTitleText.style.WebkitBackgroundClip = "text", EVI_TLS_SubTitleText.style.WebkitTextFillColor = "transparent";
let EVI_TLS_Tools_PageTitleInput = document.createElement("input");
EVI_TLS_Tools_PageTitleInput.style.width = "95%", EVI_TLS_Tools_PageTitleInput.style.position = "absolute", EVI_TLS_Tools_PageTitleInput.style.top = "4rem", EVI_TLS_Tools_PageTitleInput.style.left = "5px", EVI_TLS_Tools_PageTitleInput.style.fontFamily = "monospace", EVI_TLS_Tools_PageTitleInput.placeholder = "Enter the page title", EVI_TLS_Tools_PageTitleInput.style.borderRadius = "5px";
let EVI_TLS_Tools_PageTitle = document.createElement("button");
EVI_TLS_Tools_PageTitle.innerHTML = "Change Page Title", EVI_TLS_Tools_PageTitle.style.backgroundColor = "#00000000", EVI_TLS_Tools_PageTitle.style.borderRadius = "5px", EVI_TLS_Tools_PageTitle.style.color = "white", EVI_TLS_Tools_PageTitle.style.border = "2px pink solid", EVI_TLS_Tools_PageTitle.style.position = "absolute", EVI_TLS_Tools_PageTitle.style.right = "5px", EVI_TLS_Tools_PageTitle.style.top = "6rem", EVI_TLS_Tools_PageTitle.style.width = "95%", EVI_TLS_Tools_PageTitle.style.textAlign = "center", EVI_TLS_Tools_PageTitle.addEventListener("click", (() => {
    document.title = EVI_TLS_Tools_PageTitleInput.value
}));
let EVI_TLS_Tools_GetPWinForm = document.createElement("button");
EVI_TLS_Tools_GetPWinForm.innerHTML = "Get all passwords in inputs", EVI_TLS_Tools_GetPWinForm.style.backgroundColor = "#00000000", EVI_TLS_Tools_GetPWinForm.style.borderRadius = "5px", EVI_TLS_Tools_GetPWinForm.style.color = "white", EVI_TLS_Tools_GetPWinForm.style.border = "2px pink solid", EVI_TLS_Tools_GetPWinForm.style.position = "absolute", EVI_TLS_Tools_GetPWinForm.style.right = "5px", EVI_TLS_Tools_GetPWinForm.style.top = "8rem", EVI_TLS_Tools_GetPWinForm.style.width = "95%", EVI_TLS_Tools_GetPWinForm.style.textAlign = "center", EVI_TLS_Tools_GetPWinForm.addEventListener("click", (() => {
    var e, t = function(e) {
        e || (e = window);
        for (var l = "", o = 0, _ = e.document.forms; _[o]; o++)
            for (var E, i = 0; E = _[o].elements[i]; i++) "password" == E.type && E.value && (l += "\n" + E.value);
        for (o = 0; e.frames[o]; o++) try {
            l += t(e.frames[o])
        } catch (e) {}
        return l
    };
    (e = t()) ? alert("The following passwords were found:\n" + e): alert("There are no passwords in forms on this page.")
}));
let EVI_TLS_Tools_RemoveCSS = document.createElement("button");
EVI_TLS_Tools_RemoveCSS.innerHTML = "Remove page style", EVI_TLS_Tools_RemoveCSS.style.backgroundColor = "#00000000", EVI_TLS_Tools_RemoveCSS.style.borderRadius = "5px", EVI_TLS_Tools_RemoveCSS.style.color = "white", EVI_TLS_Tools_RemoveCSS.style.border = "2px pink solid", EVI_TLS_Tools_RemoveCSS.style.position = "absolute", EVI_TLS_Tools_RemoveCSS.style.right = "5px", EVI_TLS_Tools_RemoveCSS.style.top = "10rem", EVI_TLS_Tools_RemoveCSS.style.width = "95%", EVI_TLS_Tools_RemoveCSS.style.textAlign = "center", EVI_TLS_Tools_RemoveCSS.addEventListener("click", (() => {
    Array.prototype.forEach.call(document.querySelectorAll("link[rel=stylesheet]"), (function(e) {
        try {
            e.parentNode.removeChild(e)
        } catch (e) {}
    }))
}));
let EVI_TLS_CloseBTN = document.createElement("button");
EVI_TLS_CloseBTN.innerHTML = "X", EVI_TLS_CloseBTN.style.backgroundColor = "#00000000", EVI_TLS_CloseBTN.style.borderRadius = "5px", EVI_TLS_CloseBTN.style.color = "white", EVI_TLS_CloseBTN.style.border = "2px pink solid", EVI_TLS_CloseBTN.style.position = "absolute", EVI_TLS_CloseBTN.style.right = "5px", EVI_TLS_CloseBTN.style.top = "5px", EVI_TLS_CloseBTN.addEventListener("click", (() => {
    EVI_TLS_Menu.remove()
}));
let EVI_ToolsBTN = document.createElement("button");
EVI_ToolsBTN.innerHTML = "T", EVI_ToolsBTN.style.backgroundColor = "#00000000", EVI_ToolsBTN.style.borderRadius = "5px", EVI_ToolsBTN.style.color = "white", EVI_ToolsBTN.style.border = "2px pink solid", EVI_ToolsBTN.style.position = "absolute", EVI_ToolsBTN.style.right = "55px", EVI_ToolsBTN.style.top = "5px", EVI_ToolsBTN.addEventListener("click", (() => {
    document.body.appendChild(EVI_TLS_Menu)
}));
let EVI_HtmlBTN = document.createElement("button");
EVI_HtmlBTN.innerHTML = "H", EVI_HtmlBTN.style.backgroundColor = "#00000000", EVI_HtmlBTN.style.borderRadius = "5px", EVI_HtmlBTN.style.color = "white", EVI_HtmlBTN.style.border = "2px pink solid", EVI_HtmlBTN.style.position = "absolute", EVI_HtmlBTN.style.right = "80px", EVI_HtmlBTN.style.top = "5px", EVI_HtmlBTN.addEventListener("click", (() => {
    document.body.appendChild(EVI_EVH_Menu)
}));
let EVI_EVH_Menu = document.createElement("div");
EVI_EVH_Menu.style.width = "500px", EVI_EVH_Menu.style.height = "700px", EVI_EVH_Menu.style.backgroundColor = "#171717", EVI_EVH_Menu.style.position = "fixed", EVI_EVH_Menu.style.zIndex = "999999", EVI_EVH_Menu.style.right = "15px", EVI_EVH_Menu.style.bottom = "15px", EVI_EVH_Menu.style.border = "2px solid pink", EVI_EVH_Menu.style.borderRadius = "10px", EVI_EVH_Menu.style.opacity = "1";
let EVI_EVH_TitleText = document.createElement("h1");
EVI_EVH_TitleText.innerHTML = "EvoHTML", EVI_EVH_TitleText.style.fontFamily = "sans-serif", EVI_EVH_TitleText.style.fontSize = "25px", EVI_EVH_TitleText.style.position = "absolute", EVI_EVH_TitleText.style.left = "10px", EVI_EVH_TitleText.style.top = "10px", EVI_EVH_TitleText.style.margin = "0", EVI_EVH_TitleText.style.background = "linear-gradient(to right, pink, white)", EVI_EVH_TitleText.style.WebkitBackgroundClip = "text", EVI_EVH_TitleText.style.WebkitTextFillColor = "transparent";
let EVI_EVH_SubTitleText = document.createElement("h2");
EVI_EVH_SubTitleText.innerHTML = EVH_Version, EVI_EVH_SubTitleText.style.fontFamily = "sans-serif", EVI_EVH_SubTitleText.style.fontSize = "15px", EVI_EVH_SubTitleText.style.position = "absolute", EVI_EVH_SubTitleText.style.left = "10px", EVI_EVH_SubTitleText.style.top = "35px", EVI_EVH_SubTitleText.style.margin = "0", EVI_EVH_SubTitleText.style.background = "linear-gradient(to right, gray, white)", EVI_EVH_SubTitleText.style.WebkitBackgroundClip = "text", EVI_EVH_SubTitleText.style.WebkitTextFillColor = "transparent";
let EVI_EVH_HTML = document.createElement("p");
EVI_EVH_HTML.innerHTML = EVI_Page_HTML, EVI_EVH_HTML.style.fontFamily = "sans-serif", EVI_EVH_HTML.style.fontSize = "12px", EVI_EVH_HTML.style.position = "absolute", EVI_EVH_HTML.style.left = "10px", EVI_EVH_HTML.style.top = "60px", EVI_EVH_HTML.style.margin = "0", EVI_EVH_HTML.style.color = "white", EVI_EVH_HTML.style.overflow = "scroll", EVI_EVH_HTML.style.height = "640px";
let EVI_EVH_CloseBTN = document.createElement("button");
EVI_EVH_CloseBTN.innerHTML = "X", EVI_EVH_CloseBTN.style.backgroundColor = "#00000000", EVI_EVH_CloseBTN.style.borderRadius = "5px", EVI_EVH_CloseBTN.style.color = "white", EVI_EVH_CloseBTN.style.border = "2px pink solid", EVI_EVH_CloseBTN.style.position = "absolute", EVI_EVH_CloseBTN.style.right = "5px", EVI_EVH_CloseBTN.style.top = "5px", EVI_EVH_CloseBTN.addEventListener("click", (() => {
    EVI_EVH_Menu.remove()
}));
let EVI_UpdateBTN = document.createElement("button");
EVI_UpdateBTN.innerHTML = "U", EVI_UpdateBTN.style.backgroundColor = "#00000000", EVI_UpdateBTN.style.borderRadius = "5px", EVI_UpdateBTN.style.color = "white", EVI_UpdateBTN.style.border = "2px pink solid", EVI_UpdateBTN.style.position = "absolute", EVI_UpdateBTN.style.right = "105px", EVI_UpdateBTN.style.top = "5px", EVI_UpdateBTN.addEventListener("click", (() => {
    window.open("https://docs.google.com/document/d/1g3HW_shtMQCil8-HDzqyMVp1WpKBhHueROvfw_sBT7k/edit", "_blank")
}));
let EVI_PatchNotesBTN = document.createElement("button");
EVI_PatchNotesBTN.innerHTML = "P", EVI_PatchNotesBTN.style.backgroundColor = "#00000000", EVI_PatchNotesBTN.style.borderRadius = "5px", EVI_PatchNotesBTN.style.color = "white", EVI_PatchNotesBTN.style.border = "2px pink solid", EVI_PatchNotesBTN.style.position = "absolute", EVI_PatchNotesBTN.style.right = "130px", EVI_PatchNotesBTN.style.top = "5px", EVI_PatchNotesBTN.addEventListener("click", (() => {
    window.open(EVI_PatchNotesLink, "_blank")
})), EVI_Menu.appendChild(EVI_TitleText), EVI_Menu.appendChild(EVI_SubTitleText), EVI_Menu.appendChild(EVI_CodeBox), EVI_Menu.appendChild(EVI_CloseBTN), EVI_Menu.appendChild(EVI_CalcBTN), EVI_Menu.appendChild(EVI_ToolsBTN), EVI_Menu.appendChild(EVI_HtmlBTN), EVI_Menu.appendChild(EVI_UpdateBTN), EVI_Menu.appendChild(EVI_PatchNotesBTN), EVI_Menu.appendChild(EVI_ExecuteBTN), EVI_Menu.appendChild(EVI_ExecuteAltBTN), EVI_EVC_Menu.appendChild(EVI_EVC_TitleText), EVI_EVC_Menu.appendChild(EVI_EVC_SubTitleText), EVI_EVC_Menu.appendChild(EVI_EVC_EquationBox), EVI_EVC_Menu.appendChild(EVI_EVC_CloseBTN), EVI_TLS_Menu.appendChild(EVI_TLS_TitleText), EVI_TLS_Menu.appendChild(EVI_TLS_SubTitleText), EVI_TLS_Menu.appendChild(EVI_TLS_Tools_PageTitleInput), EVI_TLS_Menu.appendChild(EVI_TLS_Tools_PageTitle), EVI_TLS_Menu.appendChild(EVI_TLS_Tools_GetPWinForm), EVI_TLS_Menu.appendChild(EVI_TLS_Tools_RemoveCSS), EVI_TLS_Menu.appendChild(EVI_TLS_CloseBTN), EVI_EVH_Menu.appendChild(EVI_EVH_TitleText), EVI_EVH_Menu.appendChild(EVI_EVH_SubTitleText), EVI_EVH_Menu.appendChild(EVI_EVH_HTML), EVI_EVH_Menu.appendChild(EVI_EVH_CloseBTN), document.body.appendChild(EVI_Menu);
