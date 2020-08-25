const sendBtn=document.getElementById('sendBtn');
const messageIn=document.getElementById('messageIn');

const messageOut=document.getElementById('messageOut');

sendBtn.addEventListener('click',sendMsg);

function sendMsg(){

   let content=messageIn.value;

   if(content===''){
    alert("Lütfen Mesaj Giriniz");
   }
   else{
    messageOut.innerHTML=content;
   }
   
    

}

