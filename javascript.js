
function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!regex.test(email)) {
    return false;
  }
  else {
    return true;
  }
}

$('#password').on('change', function () {
  if ($('#password').val() !== "") {
    $(this).css('border', '2px solid green');
  } else if ($(this).val() === "") {
    $(this).css('border', '2px solid red');
  }
});

$('#password').on('change', function () {
  if ($('password').val() !== $('#confPassword').val()) {
    $('#confPassword').css('border', '2px solid red');
  }

  if ($(this).val() === $('#confPassword').val()) {
    $('#confPassword').css('border', '2px solid green');
  }
});

$('#confPassword').on('change', function () {
  if ($('#confPassword').val() === $('#password').val() && $('#confPassword').val() !== "") {
    $(this).css('border', '2px solid green');
  } else {
    $(this).css('border', '2px solid red');
  }
});

$('#name').on('change', function () {
  if ($('#name').val() !== "") {
    $(this).css('border', '2px solid green');
  } else if ($('#name').val() === "") {
    $(this).css('border', '2px solid red');
  }
});

$('#email').on('change', function () {
  if (IsEmail($('#email').val())) {
    $(this).css('border', '2px solid green');
  } else {
    $(this).css('border', '2px solid red');
  }
})

$('button').on('click', function () {
  if ($('input').val() === "") {
    $('input').css('border', '2px solid red');
  }
})
