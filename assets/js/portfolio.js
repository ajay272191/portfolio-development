function show_projects(id) {
  // console.log(id);
  // console.log(document.getElementById(id));
  document.getElementById(id).style.display = "none";
  document.getElementById("hide_projects").style.display = "inherit";
  document.getElementsByClassName("project_page2")[0].style.display = "inherit";
  // console.log("hello");
}
function hide_projects(id) {
  document.getElementById(id).style.display = "none";
  document.getElementById("more_projects").style.display = "inherit";
  document.getElementsByClassName("project_page2")[0].style.display = "none";
}

function show_blogs() {

}


// document.body.onclick = function(event) {
//     var event = window.event || event; //window.event for IE
//     // console.log(event.target.parentNode.classList);
//     console.log(event.target);
//     let classList = event.target.parentNode.classList.value.split(" ");
//     console.log(classList);
//     console.log(classList.includes("description"));
//     if(classList.includes("description")){
//
//     }
//   }


// document.getElementsByClassName("popup_page")[0].children[1].children[0].onclick = function() {
// document.getElementsByClassName("popup_page").onclick = function() {
//   // img
//   console.log("\nhellopo\n");
//   console.log(this);
//   // console.log(this.children[0]);
//   // // h4
//   // console.log(this.children[1].children[0]);
//   // // p
//   // console.log(this.children[1].children[1]);
// }


// popup_page{
//   position: absolute;
// width: 100%;
// left: 0;
// padding: 0;
// margin: 0;
// z-index: 100;
// top: 0;
// background: #10111394;
// }
//
// popup_page img{
//   padding: 50px;
// height: fit-content;
// width: auto;
// left: 5%;
// position: relative;
// }
//
// h44{
//   position: absolute;
// top: 20%;
// background: #ffffff4f;
// padding: 20px;
// width: 80%;
// margin-left: 10%;
// mix-blend-mode: difference;
// height: 65%;
// }
// .popup_page p {
//     /* display: none; */
// }
