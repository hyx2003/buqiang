window.onload = function () {

  // huangyuxiang
  let hyx;
  // jiangzhengshan right
  let jzs;

  let fen = 50;
 

  hyx = 10;
  this.console.log(10 * 2);
  this.console.log(10 % 3);
  this.console.log(Math.floor(10 / 3));


  jzs = "20";
  this.console.log(hyx + jzs);

  if (hyx === jzs){
    this.console.log(true);
  }else{
    this.console.log(false);
  }
  this.console.log(hyx === 20 ? true : false);

  if(hyx > jzs){
    this.console.log(hyx);
  } else{
    this.console.log(jzs);
  }
 
  if(fen >= 80){
    this.console.log("优秀");
  }else if(fen >=60 ){
    this.console.log("及格");
  }else {
    this.console.log("不合格");
  }

while (fen > 60) {
  this.console.log("yanshi");
  fen --;
}

switch (this.Math.floor(fen / 10)) {
 case 10:
 case 9 :
 case 8 :this.console.log("888");
 case 7 :
 case 6 :this.console.log("666");
 default : this.console.log("000");
}

let shuzu = [];
shuzu = [1, 2, 3, 4, 5];
shuzu[5] =["a", "b", "c"];
shuzu[6] = "4444";
this.console.log(shuzu[5]);
this.console.log("---------------------------------------------------");
for(i = 0 ; i < shuzu.length ; i++){
  this.console.log("shuzu[" + i + "]"+ "=" + shuzu[i]);
  
}
this.console.log("---------------------------------------------------");
function hello (){
  console.log("hello world");
}
hello()
hello()
this.console.log("---------------------------------------------------");

function xiangjia (x,y){
  return x + y;
}
xiangjia(3,4);
console.log(xiangjia(6,9));

this.console.log("---------------------------------------------------");

function bijiao (a, b){
  return a > b ? a : b
}
console.log(bijiao(25,355));
console.log(bijiao(6325,2564));
console.log(xiangjia(bijiao(25,63) , bijiao(66,963)))

this.console.log("---------------------------------------------------");



function adv(x,y,z,a,b){
  let pl = x + y + z + a + b
  return pl / 5; 
}
console.log(adv(35,69,52,96,54));

this.console.log("---------------------------------------------------");

function adf(x,y,z,a,b,c,d){
  let pl = x + y + z + a + b + c + d
  return pl / 7; 
}
console.log(adf(35,69,52,96,54,69,22));


this.console.log("---------------------------------------------------");


} 