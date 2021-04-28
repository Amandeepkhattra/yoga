// Validation of Form
const _email = document.getElementById('email');
const _spanEmail = document.getElementById('spanEmail');
const _phone = document.getElementById('phone');
const _spanPhone = document.getElementById('spanPhone');
const _spanCard = document.getElementById('spanCard');
const _cc = document.getElementById('cc');
const _validate = document.getElementById('validate');
const _validaionForm = document.getElementById('validaionForm');

const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/; 
  const phoneNumber = /^\d{3}-\d{3}-\d{4}$/;
    const cardPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
      
      const patterns = {
        card: /^\d{4}-\d{4}-\d{4}-\d{4}$/,
        email:/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/,
        phone:/^\d{3}-\d{3}-\d{4}$/       
      }
      
function validate() {
    if ( !patterns.email.test(_email.value) ) {
         _spanEmail.innerHTML = "Invalid";
       _validaionForm.innerHTML='Please Fill';
        }
    if ( !patterns.card.test(_cc.value) ){
       _spanCard.innerHTML = "Invalid";
       _validaionForm.innerHTML='Please Fill';
   }
    if ( !patterns.phone.test(_phone.value) ) {
        _spanPhone.innerHTML = "Invalid";
     _validaionForm.innerHTML='Please Fill';
 }
  if ( patterns.card.test(_cc.value) && patterns.email.test(_email.value) && patterns.phone.test(_phone.value) ) 
     _validaionForm.innerHTML='Success';
  
}
_validate.onclick = validate;