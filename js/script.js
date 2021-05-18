const secHand=document.querySelector('.sec-hand');
const minHand=document.querySelector('.min-hand');
const hrHand=document.querySelector('.hr-hand');

setInterval(setSec,1000);
setInterval(setMin,1000);
setInterval(setHr,1000);

function setSec(){
    const now=new Date();
    const seconds=now.getSeconds();
    const secondsDegrees=((seconds/60)*360)-90;
    secHand.style.transform=`rotate(${secondsDegrees}deg)`;
    //console.log(seconds);
}
function setMin(){
    const now=new Date();
    const mins=now.getMinutes();
    const minsDegrees=((mins/60)*360)-90;
    minHand.style.transform=`rotate(${minsDegrees}deg)`;
    //console.log(mins);
}
function setHr(){
    const now=new Date();
    const mins=now.getMinutes();
    const minsDegrees=((mins/60)*360);
    const hrs=now.getHours();
    const hrsDegrees=((hrs/12)*360)-90+minsDegrees/12;;
    hrHand.style.transform=`rotate(${hrsDegrees}deg)`;
    console.log(hrsDegrees);
}