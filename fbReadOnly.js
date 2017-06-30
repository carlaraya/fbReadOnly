classNames = ["UFIAddComment", "UFILikeLink", "share_action_link", "PageLikeButton", "groupRHCAddMemberTypeaheadBox"];
idNames = ["feedx_sprouts_container", "timeline_react_composer_container", "pagelet_group_composer"];
mainLoop = function() {
  for (var i = 0; i < classNames.length; i++) {
    var elems = document.getElementsByClassName(classNames[i]);
    for (var j = 0; j < elems.length; j++) {
      elems[j].style.display="none";
    }
  }
  for (var k = 0; k < idNames.length; k++) {
    var elem = document.getElementById(idNames[k]);
    if (elem) elem.style.display="none";
  }
};
setInterval(mainLoop, 300);
