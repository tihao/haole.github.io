from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=["POST"])
def home_page():
    cmd = ""
    if request.method == "POST":
        cmd = request.form["cmd"]
    return render_template('index.html', result=result(cmd))


def result(cmd):
    help = ["BIO   Biographical profile of me","EDU   Education","SOC   Display my social link","CLS   Clear the screen"]
    bio = ["My name is Hao Le and I live in Stanton, CA", "I am a recent graduate of University of Irvine", "My major is Computer Science", "I enjoy coding, listening to music, and playing games", ""]
    edu = ["Associate's degree, Computer Science at Cypress College - Spring 2019", "Bachelor's degree, Computer Science at UC Irvine - Spring 2021"]
    cls = [""]
    social_link = ["https://www.linkedin.com/in/tihao/", "https://github.com/tihao"]
    error = [" is not recognized, type HELP for specific command"]
    
    if cmd.upper() == "HELP":
        return help
    elif cmd.upper() == "BIO":
        return bio
    elif cmd.upper() == "EDU":
        return edu
    elif cmd.upper() == "SOC":
        return social_link
    elif cmd.upper() == "CLS":
        return cls
    elif cmd.upper() == "":
        return ""
    else:
        cmd = "'%s\'"%(cmd)
        error[0] = cmd + error[0]
        return error

if __name__ == "__main__":
    app.run(debug=True)