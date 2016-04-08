function toggleNav () {
  var nav = document.querySelector('#nav-container');
  if (nav.className == 'show') {
    document.querySelector('body').style = '';
    nav.className = '';
  }
  else {
    nav.className = 'show';
    document.querySelector('body').style = 'position: fixed;';
  }
}

window.addEventListener('load',function () {
  document.querySelector('#menu-toggle').addEventListener('click',toggleNav);
  document.querySelector('#nav-container').addEventListener('click',function (event) {
    if (event.target == document.querySelector('#nav-container')) {
      toggleNav();
    }
  });
});
