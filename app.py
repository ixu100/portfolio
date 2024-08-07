from flask import Flask, render_template
app = Flask(__name__,template_folder="templates")

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html", title="About")

@app.route("/projects")
def projects():
    return render_template("projects.html",title="Projects")

@app.route("/contact")
def contact():
    return render_template("contact.html",title="Contact")
