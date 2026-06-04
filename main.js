// Function for finding count
function findCnt(a,b){
    let len1=a.length;
    let len2=b.length;
    let splited1=a.toLowerCase().split("");
    let splited2=b.toLowerCase().split("");
    let idx1=0,idx2=0;
    for(idx1=0;idx1<len1;idx1++){
        if (splited1[idx1] === "0" || splited1[idx1] === " ") continue;
        for(idx2=0;idx2<len2;idx2++){
            if(splited1[idx1]==splited2[idx2]){
                splited1[idx1]=splited2[idx2]="0";
                break;
            }
        }
    }
    let count=0;
    for(idx1=0;(idx1<len1);idx1++){
        if(splited1[idx1]!="0" && splited1[idx1]!=" " ){
            count++;
        }
    }
    for(idx2=0;(idx2<len2);idx2++){
        if(splited2[idx2]!="0" && splited2[idx2]!=" "){
            count++;
        }
    }
    return count;
}
// Function for flames calculator
function flames(num){
    let str1="flames";
    let str=str1.split("");
    let res="";
    let count=0,idx=0,idx1=0;
    while(count<5){
        if(idx1==6){
            idx1=0;
        }
        if(str[idx1]==="z"){
            idx1++;
            continue;
        }
        if(idx==(num-1)){
            str[idx1]="z";
            idx=0;
            idx1++;
            count++;
        }else{
            idx1++;
            idx++;
        }
        
    }
    for(idx=0;idx<6;idx++){
        if(str[idx]!="z"){
            res=str[idx]
        }
    }
    switch(res){
        case 'f':
            return '<p><i class="fa-solid fa-user-group"></i></p>Friends';
        case 'l':
            return '<p><i class="fa-regular fa-heart"></i></p>Lovers';
        case 'a':
            return '<p><i class="fa-regular fa-face-laugh-beam"></i></p>Affection';
        case 'm':
            return '<p><i class="fa-solid fa-champagne-glasses"></i></p>Marriage';
        case 'e':
            return '<p><i class="fa-regular fa-face-angry"></i></p>Enemies';
        case 's':
            return '<p><i class="fa-solid fa-children"></i></p>Siblings';
        default:
            return "Invalid";
    }
}
let btn=document.getElementById("clk");
let display=document.getElementById("disp");
btn.addEventListener("click",()=>{
    let finderName1=document.getElementById("name1").value;
    let finderName2=document.getElementById("name2").value;
    let num=findCnt(finderName1,finderName2);
    let result=flames(num);
    display.style.display="block";
    display.innerHTML=result;
});