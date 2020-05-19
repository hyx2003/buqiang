// 写一个对象，创建一只可爱的猫
let dog = {
  // 演示的是定义属性
  name: 'xixi',
  age: 13,
  breed: '中华田园犬',
  weight: 25,
  isMale: true,
  
  health: 100,
  food: 100,
  water: 100,


  liveInterval: null,

  // 演示的是定义方法
  bark: function () {
    console.log('wang!wang!wang!');
    this.water--;
  },
 
  // 狗狗愿意讲，你才能知道狗狗的名字，体现"封装性的编程思想"
  sayName: function () {
    // console.log('my name is ' + this.name);
    // 注意this关键字
    this.food--;
    this.water--;
    return this.name;
  },

  run: function() {
    // 狗不可能永远跑下去，也有累的时候
    if ( !this.isTired() ) {
      console.log('狗狗在小区草地上撒欢儿跑！');
      this.food -= 10;
      this.water = this.water - 10;
    } else {
      console.log('跑不动了');
    }
  },

  showStatus: function() {
    console.log('health: ' + this.health)
    console.log('food: ' + this.food)
    console.log('water: ' + this.water )
  },

  // 用行为限制行为，属性和方法之间的数据互访
  isTired: function() {
    if (this.food >= 20 && this.water >= 20) {
      return false;
    }
    return true;
  },

  live: function() {
    // 这一行是典型的在对象的方法内部，引用对象的属性
    // 所以this指代的毋庸置疑是dog这个对象
    // console.log(this.water);
    // 这段解释你们目前看不懂是完全没有问题的，以后慢慢体会
    let self = this;
    // setInterval(    以函数的形式描述要执行的代码  , 每次执行代码后间隔得时间   );
    this.liveInterval = setInterval(function(){
      // 这一行是在 setInterval 的匿名函数里的this
      // 谁说this指向的就是dog呢？显然这里的this指代的是别的东西，而不是隔了好几层的dog
      self.water = self.water - 5;
      self.food = self.food - 3;



      self.checkStatus();
      self.showStatus();
    }, 500);
  },


  checkStatus: function () {
    if (this.water < 0) {
      this.water = 0;
      this.bark();
    }
    if (this.food < 0) {
      this.food = 0;
      this.bark();
    };

    if (this.water === 0 || this.food === 0) {
      this.health = this.health < 0 ? 0 : this.health - 5;
      this.bark();
    };

    if (this.health === 0) {
      this.dead();
    };


  },


  dead: function () {
    clearInterval(this.liveInterval);
    console.log("aowooooo...");
  },


  eat: function () {
    this.water = 100;
    this.food = 100;
    return "狗狗吃饱了，摇头表示感谢";
  }
};

dog.live();
dog.bark();
console.log('这只狗的名字叫' + dog.sayName());
dog.run();
dog.showStatus();
dog.run();
dog.run();
dog.run();
dog.showStatus();
dog.run();
dog.run();
dog.run();
dog.run();
dog.run();
dog.run();
dog.showStatus();
dog.run();
dog.run();

//let ex = setInterval(function(){
//  console.log("hihi");
//},100);

//setInterval(function(){
//  clearInterval(ex);
//},3000);