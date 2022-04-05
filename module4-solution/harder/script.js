(function (){

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    names.forEach((name)=>{
      if (name.toUpperCase().startsWith('J')) {
        byeSpeaker.speak(name);
      } else {
        helloSpeaker.speak(name)
      }
    }) 
    
})()