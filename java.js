// Variables
let theInput =document.querySelector('.add input');
let button = document.querySelector('.plus');
let container =document.querySelector('.content');
let noMessage =document.querySelector('.No-message');

window.onload=function(){
    theInput.focus();
    // هنا قولتلو اول متعمل لوود خلي الانبوت جاهز انه يتكتب فيه
}

button.onclick = function(){
    if(theInput.value==''){
        swal('What!',  'You clicked the button!',  'warning')
    }else{
        noMessage.remove();

        let mainSpan=document.createElement('div');
        let DeleteButt=document.createElement('div');
        let text =document.createTextNode(theInput.value);
        let deleteText=document.createTextNode('Delete');
        mainSpan.appendChild(text);
        mainSpan.className='listBox';
        DeleteButt.appendChild(deleteText);
        mainSpan.appendChild(DeleteButt);
        DeleteButt.className='delete';
        // mainSpan.appendChild(DeleteButt);
        container.appendChild(mainSpan);
        theInput.value='';
        theInput.focus();
        // انت هنا عملت الديفات ودخلت فيها الكلام والزرار والكلام الفي الزرار وقومت مدخل كله في الوعاء الكبير
    }
}
// هنا انا ضيفت حدث اسمه كليك
document.addEventListener('click',function(e){
    // لو الحدث دا اتعمل علي الديليت شيل الديف كلها
    if(e.target.className=='delete'){
        e.target.parentNode.remove();
    }
    // لو الحدث دا اتعمل علي البوكس الغي الكلام الفيه وطبق عليه الكلاس
    if(e.target.className=='listBox'){
        e.target.classList.toggle('finished');
    }
})
