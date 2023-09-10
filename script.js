let conatiner = document.querySelectorAll('.container');
conatiner.forEach(function(val){
    val.addEventListener('dblclick',function(){
        val.childNodes[3].style.transform ='scale(1)';
        val.childNodes[3].style.opacity =1;

        setTimeout(() => {
            val.childNodes[3].style.opacity =0;


        }, 1000);
        
        setTimeout(() => {
            val.childNodes[3].style.transform ='scale(0)';

   
        }, 2000);



 })
})
