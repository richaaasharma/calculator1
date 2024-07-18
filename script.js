console.log("welcome to calculator")

// let string ="";
// let buttons =document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
    // button.addEventListener('click',(e)=>{
      //  if(e.target.innerHtml == '='){
        // string = eval(string);
        // document.querySelector('input').value=string;
      //  }
      //  else if(e.target.innerHTML == 'C'){
            //  string= "";
            //  document.querySelector('input').value=string;
           
      //  }
      // else{
      //  console.log(e.target)
        // string= string + e.target.innerHtml;
        // document.querySelector('input').value=string;
        // console.log("click")
      // }
    // })

    

    function Solve(val) {
      var v = document.getElementById('res');
      v.value += val;
   }
   function Result() {
      var num1 = document.getElementById('res').value;
      var num2 = eval(num1);
      document.getElementById('res').value = num2;
   }
   function Clear() {
      var inp = document.getElementById('res');
      inp.value = '';
   }
   function Back() {
      var ev = document.getElementById('res');
      ev.value = ev.value.slice(0,-1);
   }
