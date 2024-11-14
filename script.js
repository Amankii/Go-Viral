// Placeholder for future interactive features
document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Go Viral With Aman!");

    document.querySelectorAll('.faq .question').forEach((question) => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            let answer = question.querySelector('p');
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Google Data

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxbXUVl8Pa6eOOkbmdSpleBfiPvW5gktbgzvg2LDLBOAJrCtgrvmUzh03odRdGKtmNA/exec'
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.querySelector('#spnz');
    const btn = document.querySelector('button');
    const inp = document.querySelector('.input');

    btn.disabled = true;

    if(inp.value.length < 0){
        btn.disabled = true
    } else {
        btn.disabled = false;
    }
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = 'Message Sent Successifully';
            setTimeout(function() {
                msg.innerHTML = '';
            },5000);
            form.reset();
            btn.disabled = true;
        }
    )
        .catch(error => console.error('Error!', error.message))
    })

    // On Scoll Animation

    AOS.init();
    

});
