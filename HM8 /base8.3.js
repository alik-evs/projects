function cutAndSwitchString(text) {
    var regex = /^(\w+)\s(\w+)$/;
    var brokenText = text.replace(regex, '$2, $1');
    return brokenText;
  }
  
  console.log(cutAndSwitchString("Java Script")); // "Script, Java"
  