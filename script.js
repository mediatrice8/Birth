function birth(){
    var dat = document.getElementById("date").value;
    var  array = dat.split("-");
    var arrayNameMan = ['Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame', 'Kwasi'];
    var arrayNameFemale = ['Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama', 'Akosua'];
    console.log("month:", dat);
    var dd = parseInt(array[2]);
    var mm = parseInt(array[1]);
    var yy = parseInt(array[0]);
    console.log("year: "+ yy +"month: " + mm + "day:" + dd);
    if (yy<=0){
        alert("no centruy");
        }
        else if(yy<=100){
            alert("first century");
            }
            else if(yy % 100 == 0){
                var result =yy/100;
                }
                else{
                    result =yy/100 +1;
                    var d =((((result/4)- 2*result -1) +(5*yy/4) +(26*(mm+1)/10) +dd) % 7);
                  var dayNumber = Math.round(d);
                  console.log(dayNumber);
                  if(document.getElementById("gender").checked){
                      alert(arrayNameMan[dayNumber - 1]);
                  }
}