var reasons = [
    "ranbeer singh",
    "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"
    
  
  ];
  var images = [
    
    "https://i.postimg.cc/qqyYvVbq/grandpa.jpg",
     "https://i.postimg.cc/wjMnFtMX/father.jpg" , 
     "https://i.postimg.cc/5ymDKL83/bro.jpg",
      "https://i.postimg.cc/JnL6wtrd/sister.jpg",
       "https://i.postimg.cc/bw5W5zSK/mother.jpg"
  ];
  
  var i = 0;
  function nextslide() { 
     document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").innerHTML = images[i];
    i++;
    
   
  }