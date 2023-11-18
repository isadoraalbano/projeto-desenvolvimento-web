
function register() {
    var newEmail = $("#email").val();
    var newPassword= $("#password").val();
    var data = {
        email: newEmail, password: newPassword
    }
    $.post( "http://localhost:3000/user", data, function(resp) {
        console.log('ENTROU')
        alert( resp.msg );
      }).fail(function() {
          alert( "Erro ao cadastrar!" );
    })
}
