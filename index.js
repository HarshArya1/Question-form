const form = document.querySelector('form');
const ans = {
    q1: "Hyper Text Markup Language",
    q2: "<href>",
    q3: "<img src='image.jpg'>",
    q4: "<link>",
    q5: "<br>"
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    let result = 0;
    let number=0;
    for (let [key, value] of formData.entries()) {
        if (value === ans[key]){
            result++;
            number+=4;
        }
        else if(value !== ans[key]){
            number-=1;
        }
    }
    const out = document.getElementById('out');
    out.innerText = `${result} out of 5 is correct and you got ${number} Marks out of 20`;
});
form.addEventListener('reset',(event)=>{
    form.reset();
    const out = document.getElementById('out');
    out.innerHTML=``;

})
