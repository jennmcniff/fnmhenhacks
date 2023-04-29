from quart import Quart
from app import blueprints

app = Quart(__name__)
blueprints.load_blueprints(app)


@app.route("/")
async def hello():
    return "hello"


app.run(port=3000)
