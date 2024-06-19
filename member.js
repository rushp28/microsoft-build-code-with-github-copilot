function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.value;
    var memberValid = false;
    if (memberValue == "") {
        member.style.borderColor = "#ff0000";
        memberValid = false;
    } else {
        member.style.borderColor = "#00ff00";
        memberValid = true;
    }
    return memberValid;
}