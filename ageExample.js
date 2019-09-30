let Age = 0;
basic.showString("Increment age with A submit with B")
input.onButtonPressed(Button.A, function () {
   Age += 1;
   basic.showNumber(Age)
  
})
input.onButtonPressed(Button.B, function () {
   if(Age< 18 )
   {
    basic.showString("You are child");
   }
   else if(Age >= 18 && Age < 60)
   {
    basic.showString("You are an adult");
   }
   else
   {
 
    basic.showString("You are a senior citizen");
   }
})
