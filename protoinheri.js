const robot = {
    move: function(){
        console.log("robot moves")
    },
    makesound: function(){
        console.log("bbebb")
    }
}

const dancingRobot = Object.create(robot)

dancingRobot.dance =function(){
    console.log("aaooooo")
}

robot.move()
dancingRobot.move()
dancingRobot.dance()





// Define the base class (Robot)
class Robot {
    move() {
      console.log("The robot is moving!");
    }
  
    makeSound() {
      console.log("Beep boop!");
    }
  }
  
  // Define the subclass (DancingRobot) that inherits from Robot
  class DancingRobot extends Robot {
    dance() {
      console.log("The dancing robot is dancing!");
    }
  }
  
  // Create an instance of Robot- an instance is one specific object created from a class!
  const robot1 = new Robot(); //constructor -  for initializing properties when an instance is created.
  robot1.move(); // Output: The robot is moving!
  robot1.makeSound(); // Output: Beep boop!
  
  // Create an instance of DancingRobot
  const dancingRobot = new DancingRobot();
  dancingRobot.move(); // Output: The robot is moving! (inherited)
  dancingRobot.makeSound(); // Output: Beep boop! (inherited)
  dancingRobot.dance(); // Output: The dancing robot is dancing!
  