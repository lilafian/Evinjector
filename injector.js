// created by lilaf @ strawberry milk software for evinjector
// https://github.com/Lilafian/Evinjector/tree/main
// script tag injector

let Code = document.createElement("input");
Code.addEventListener('keypress', (event)=> {
	if (event.key === "Enter") {
  	  let temp = document.createElement("script");
  	  temp.innerHTML = Code.value;
  	  document.body.appendChild(temp);
  	  setTimeout(()=>{
     	  temp.remove();
  	  }, 30000);
	}
});
