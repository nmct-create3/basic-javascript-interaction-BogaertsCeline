document.addEventListener( 'DOMContentLoaded', function() {
    console.log( 'Script loaded!' );
    handleFloatingLabel();
});

function handleFloatingLabel(){
    input= document.querySelector('.js-name-input');
    label= document.querySelector('.js-floating-label');

    input.addEventListener("blur", function(){
      if ( input.value != ""){
        console.info('input niet null');
        label.classList.add('is-floating');
      }
      else{
        console.info('input null');
        label.classList.remove('is-floating');
      }
    });
}
