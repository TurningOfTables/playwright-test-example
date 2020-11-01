$(document).ready(() => {
  $("#login-link").click(() => {
    $("#login-popup-overlay").fadeIn();
  });

  $("#login-popup-close").click(() => {
    $("#login-popup-overlay").fadeOut();
    $(".form-loading-container").hide();
    $(".form-success-container").hide();
    $(".form-failure-container").hide();
    $(".form-submit-container").show();
  });

  $("#form-submit").click((event) => {
    event.preventDefault();
    
    
    if ($("#password").val() == 'guest') {
      loginSuccess();
    } else {
      loginFail();
    }
  });
});

function loginSuccess() {
  $(".form-submit-container").fadeOut(() => {
    $(".form-loading-container").fadeIn(() => {
      setTimeout(() => {
        $(".form-loading-container").fadeOut(() => {
          $(".form-success-container").fadeIn();
        });
      }, 1000);
    });
  });
}

function loginFail() {
  $(".form-submit-container").fadeOut(() => {
    $(".form-loading-container").fadeIn(() => {
      setTimeout(() => {
        $(".form-loading-container").fadeOut(() => {
          $(".form-failure-container").fadeIn();
        });
      }, 1000);
    });
  });
}
