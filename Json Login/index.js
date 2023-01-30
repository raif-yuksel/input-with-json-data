var loggedusers = [];
var users = [{
  id: 1,
  username: 'raif',
  password: 'raif',
  type: 'User'
}, {
  id: 2,
  username: 'raify',
  password: 'raify',
  type: 'Admin'
}, {
  id: 3,
  username: 'ryüksel',
  password: 'ryüksel',
  type: 'User'
}];
function getUserByProperty(key, value, strict, multiple, case_insensitive) {
  var result = [];
  for (var index in users) {
    var user = users[index];
    if (typeof user[key] != 'undefined') {
      var compare = user[key];
      if (case_insensitive) {
        if (typeof compare == 'string')
          compare = compare.toLowerCase();
        if (typeof value == 'string')
          value = value.toLowerCase();
      }
      if (typeof value == 'undefined' || ((strict && compare === value) || (!strict && compare == value))) {
        if (multiple) {
          result.push(user);
        } else {
          return user;
        }
      }
    }
  }
  return multiple ? result : null;
}
function getUserById(id) {
  return getUserByProperty('id', id);
}
function getUserByUsername(username, case_insensitive) {
  return getUserByProperty('username', username, false, false, case_insensitive);
}
function getUsersByType(type, case_insensitive) {
  return getUserByProperty('type', type, false, true, case_insensitive);
}
function login(username, password) {
  if (typeof username == 'string' && typeof password == 'string' && username.length > 0 && password.length > 0) {
    var loggeduser;
    for (var index in users) {
      var user = users[index];
      if (username === user.username && password === user.password)
        loggeduser = user;
    }
    if (typeof loggeduser != 'undefined') {
      loggedusers[loggeduser.id] = true;
      return loggeduser;
    }
  }
  return false;
}
function logout(userid) {
  if (loggedusers[userid]) {
    var temporary = [];
    for (var id in loggedusers)
      if (id != userid)
        temporary[id] = true;
    loggedusers = temporary;
    return true;
  }
  return false;
}

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var username_element = e.srcElement.elements.username;
  var password_element = e.srcElement.elements.password;
  if (username_element && password_element) {
    username = username_element.value;
    password = password_element.value;
    var user = login(username, password);
    if (user !== false) {
      username_element.value = '';
      password_element.value = '';

      toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "2500",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      } 
      toastr.success(user.type +' Olarak oturum açtı.');
      setTimeout(function() { 
        window.location.href = "./deneme.html";
      }, 2500);
    } else {
      password_element.value = '';
      username_element.value = '';
      username_element.focus();
      toastr.error('Geçersiz kullanıcı adı veya şifre.');
    }
  }
});


$(document).ready(function () {
  $("img.password-show-button").on("click", function () {
      if ($(this).attr("data-click-state") == 0) {
          $(this).attr("data-click-state", 1);
          $(this).parent().find("input").attr("type","text");
          $(this).attr("src","/img/eyes-on.png");
      }
      else {
          $(this).attr("data-click-state", 0);
          $(this).parent().find("input").attr("type","password");
          $(this).attr("src","/img/eyes-off.png");
      }
  });
});