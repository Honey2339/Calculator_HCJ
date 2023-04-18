let string = "";
let button = document.querySelectorAll('.btn-1');
let mvpbutton = document.querySelectorAll('.btn-1');
Array.from(button).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        try{
        if(e.target.innerHTML == "=")
        {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "C"){
            string = string.substring(0,string.length -1);
            document.querySelector('input').value = string;
        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
        }
        catch(error)
        {
            alert("Error!")
        }
    })
})