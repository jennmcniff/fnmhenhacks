from quart import Quart
from app import blueprints
from app.blueprints.files import serve_file

app = Quart(__name__)
blueprints.load_blueprints(app)


@app.route("/")
async def hello():
    return await serve_file("index.html")


app.run(port=3000)
