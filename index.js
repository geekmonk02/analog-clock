setInterval(() => {
   let date =new Date();
   h= date.getHours();
   m=date.getMinutes();
   s=date.getSeconds();
   hrot=30*h + m/2;        //rotation of hour hand  
   mrot=6*m;               //rotation of minute hamd
   srot=6*s;               //rotation of second hand

   
   hour.style.transform = `rotate(${hrot}deg)`;    //logic to rotate the hour hand 
   min.style.transform = `rotate(${mrot}deg)`;     //logic to rotate the minute hand
   sec.style.transform = `rotate(${srot}deg)`;     //logic to rotate the second hand
}, 1000);