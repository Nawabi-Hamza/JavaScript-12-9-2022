// var input = document.querySelector('#email');
const inputs = document.querySelectorAll('input');

const patterns ={
    email: /^([\w\.]+)@([a-z]{2,8})\.([A-z]{2,8})(\.[a-z]{2,8})?$/ ,
    phone: /^(\d{10})$/,
    pass: /^([\w@-]{8,20})$/


}

function validate(field,regex){
    if(regex.test(field.value)){
        field.className = 'valid'
    }
    else{
        field.className = 'invalid'
    }
}

inputs.forEach(function(input){
    input.addEventListener('keyup',function(e){
        // console.log(e.target.attributes.name.value)
        // validate(e.target,/^([\w\.]+)@([a-z]{2,8})\.([A-z]{2,8})(\.[a-z]{2,8})?$/)
        // validate(e.target,/^([0-9]{10})$/)
        validate(e.target,patterns[e.target.attributes.name.value])
    
})
})

