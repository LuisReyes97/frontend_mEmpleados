function go(){

    if (document.form.password.value=='sistemaprueba' && document.form.login.value=='sistemaprueba@saludchiapas.gob.mx'){ 
            document.form.submit(); 
        } 
        else{ 
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Datos incorrectos',
              })
        } 
    } 