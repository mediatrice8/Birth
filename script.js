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
}