window.onload = function(){
  let dog = {
    name :"huanhuan",
    species : "博美",
    age : 7,
    ismale : true,
    health : 100,
    food : 100,
    water : 100,
    live : null,
    islive : true,

    jiao : function(){
      if(this.islive){
        console.log("wang!!!");
        this.water--;
      }
      this.last();
    },

    sayname : function(){
      if(this.islive){
        this.food--;
        this.water--;
        return this.name;
      }
      this.last();
    },

    run : function(){
      if(this.islive){
        if(!this.istired()){
            console.log("我出去玩了");
            this.food -= 15 ;
            this.water -= 15 ;
            return this.food,this.water
        } else {
            console.log("我累了，跑不动了")
        } 
      }
      this.last();
    },
    
    showstatus : function(){
      console.log('health: ' + this.health);
      console.log('food: ' + this.food);
      console.log('water: ' + this.water);
    },

    istired : function(){
      if(this.food >= 20 && this.water >=20){
        return false;
      }
      return true;
    },

    shijian : function(){
      if(this.islive){
        let self = this
        this.live = setInterval(function(){
          self.water -= 3;
          self.food -= 4;
          self.showstatus();
          self.checkStatus();
        },400);
      };
      this.last();
    },

    checkStatus : function () {
      if (this.water < 0) {
        this.water = 0;
        this.jiao();
      };

      if (this.food < 0) {
        this.food = 0;
        this.jiao();
      };
  
      if (this.water === 0 || this.food === 0) {
        this.health = this.health < 0 ? 0 : this.health - 5;
        this.jiao();
      };
  
      if (this.health === 0) {
        this.dead();
      };
    },

    dead : function(){
      clearInterval(this.live);
      this.islive = false;
      console.log("我挂了！！！！！！！！！！！！")
    },

    eat: function () {
      this.water = 100;
      this.food = 100;
      return "狗狗吃饱了，摇头表示感谢";
    },

    last : function(){
      if(!this.live){
        console.log("狗狗已经无法挽回，节哀吧！！")
      }
    }
  }

  dog.shijian()
}
