classNames = ["UFIAddComment", "UFILikeLink", "share_action_link"];
idNames = ["timeline_react_composer_container"];
mainLoop = function() {
  classNamesToHide.forEach(function(className) {
  for (var i = 0; i < classNames.length; i++) {
    elems = document.getElementsByClassName(classNames[i]);
    for (var j = 0; j < elems.length; j++) {
      elems[j].style.display="none";
    }
  }
  for (var i = 0; i < idNames.length; i++) {
    elem = document.getElementById(idNames[i]);
    elem.style.display="none";
  }
}
setInterval(mainLoop, 300);
