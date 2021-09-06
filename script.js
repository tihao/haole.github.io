

function result(event) {
    var x = event.keyCode;
    
    // Press enter
    if (x === 13) {
        var cmd = document.getElementById('terminal-cmd').value;
        document.getElementById('terminal-result').innerHTML = display(cmd);
        event.preventDefault();
        document.getElementById('terminal-cmd').value = "";
    }
};


function display(cmd) {
    help = "BIO   Biographical profile of me <br> EDU   Education <br> SOC   Display my social link <br> CLS   Clear the screen";
    bio = "My name is Hao Le and I live in Stanton, CA <br> I am a recent graduate of University of Irvine<br>My major is Computer Science<br>I enjoy coding, listening to music, and playing games";
    edu = "Associate's degree, Computer Science at Cypress College - Spring 2019<br>Bachelor's degree, Computer Science at UC Irvine - Spring 2021"
    cls = "";
    social_link = "https://www.linkedin.com/in/tihao/ <br> https://github.com/tihao";
    error = " is not recognized, type HELP for specific command";
    if (cmd.toUpperCase() == "HELP") {
        return help;
    }
    else if (cmd.toUpperCase() == "BIO") {
        return bio;
    }
    else if (cmd.toUpperCase() == "EDU") {
        return edu;
    }
    else if (cmd.toUpperCase() == "SOC") {
        return social_link;
    }
    else if (cmd.toUpperCase() == "CLS") {
        return cls;
    }
    else
        return '\'' + cmd + '\'' + error;
}