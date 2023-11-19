
function register() {
    var newEmail = $("#email").val();
    var newPassword= $("#password").val();
    var data = {
        email: newEmail, password: newPassword
    }
    $.post( "http://localhost:3000/user", data, function(resp) {
        alert( resp.msg );
      }).fail(function() {
          alert( "Erro ao cadastrar!" );
    })
}

function login() {
    var email = $("#email1").val();
    var password= $("#password1").val();
    var data = {
        email: email, password: password
    }
    $.post( "http://localhost:3000/login", data, function(resp) {
        window.location.href= '/servicos.html'
        alert( resp.msg );
      }).fail(function() {
          alert( "Email ou senha incorretos!" );
    })
}
