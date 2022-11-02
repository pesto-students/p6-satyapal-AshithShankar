function BMI(age) {
    let name = this.name;
    let bmi = this.w / (this.h * this.h);
    let str  = "Name is " + name + " Age is " + age + " and BMI is " + bmi;
    return str;
  }
  const bmi = BMI.bind({name:"shiva", w: 70, h: 1.8 });
  console.log(bmi(26)); 
  //bind returns a function which is called here 
  // a method from another object can be borrowed for a new object using bind
  
  // call and apply also allow for funciotn borrowing but when they are //called 
  // on the function object they execute teh funciton instead of returning as //in bind
  
  
  var person = {
    name: "Ashith",
    w: 1,
    h: 1,
  };
  console.log(BMI.call(person,26));
  console.log(BMI.apply(person,[26]));
  
  