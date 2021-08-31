let count = 0;

document.getElementsByClassName('hambar')[0]
        .addEventListener('click', function (event) {
            if(count == 0){
              count = count + 1;
              console.log("count: ");
              console.log(count);
              document.getElementsByClassName('header_nav')[0].style.display = "block";
              // document.getElementById("p2").style.
            }else {
              count = count - 1;
              console.log("count");
              console.log(count);
              document.getElementsByClassName('header_nav')[0].style.display = "none";

            }
              // console.log("helo loaded");
              // alert('you just click me');
        }
);
// document.getElementById("yourH1_element_Id").innerHTML = "yourTextHere";
console.log(document.getElementsByClassName('developer')[0].innerHTML);
document.getElementsByClassName('developer')[0].innerHTML = `Designed and Developed by <span>Softdev Ajay</span>`;
