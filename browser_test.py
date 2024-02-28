# Test in a standard browser

import webbrowser
import fire
from flask import Flask

def create_app(site: str):
    app = Flask(__name__)

    @app.route("/")
    def hello_world():
        return f"""
            <style>
    div.iframe-container{{
        display:flex;
        width:100%;
        /*height:100%;*/
        height:fit-content;
        flex-direction:both;
    }}

    iframe{{
        flex-grow:2;
        border:none;
        height:80vh;
        margin:0;
        padding:0;
    }}
    </style>

            <p>Select below!</p>
            <div style="display=flex;width=100%;height=100%;flex-direction=column;background-color=blue;overflow=hidden;"  class="iframe-container">
            <iframe title="BioEngine" style="flex-grow=1;border=none;margin=0;padding=0;" src="{site}"></iframe>
            </div>



        """
    return app

def run(site):
    app = create_app(site)
    webbrowser.open("http://localhost:5000")
    app.run(debug=True)

if __name__ == "__main__":

    fire.Fire(run)
