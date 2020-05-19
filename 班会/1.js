window.onload = function(){
let box = this.document.getElementById('box');
let span = this.document.getElementById('span');
let state = 0;
let time;
let gailu = 0;
let hh;
let ui = 0;
let ppp = document.getElementById('ppp');
let xuehao = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
              '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',];
//span.onclick = function (){
    //if (state === 0){
      // clearInterval(time);
       //time = setInterval(function () {
       // let hh = Math.round(Math.random() * xuehao.length - 1);
          //box.innerHTML = xuehao[hh]
          //console.log(xuehao[hh]);
         // console.log(hh)
     // }, 1);
    //  state = 1
//}else{
 // state=0;
 // clearInterval(time);
//}
//};
  setInterval(function () {
//  for(let i = 0 ; i < 1600000 ; i++){
    hh = Math.round(Math.random() * xuehao.length - 1);
     console.log(xuehao[hh]);
     if(hh === -0 || hh === 0 || hh === xuehao.length - 1 || hh === -1){
       gailu ++;
       box.innerHTML = gailu;
       ui = gailu / 1600000
       span.innerHTML = ui;
   }
   console.log(hh)
  // }
 }, 1);
}






