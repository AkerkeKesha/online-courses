
$('#btnLogin').click(function(event) {
  var form = $('#formLogin')

  if (form[0].checkValidity() === false) {
    event.preventDefault()
    event.stopPropagation()
  }

  form.addClass('was-validated');
});