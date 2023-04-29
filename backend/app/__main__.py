from quart import Quart, Response
from app import blueprints
from app.blueprints.files import serve_file
from app.errors import ApiError

app = Quart(__name__)
blueprints.load_blueprints(app)


@app.route("/")
async def hello():
    return await serve_file("index.html")


@app.errorhandler(ApiError)
async def error(err: ApiError) -> Response:
    return err.to_response()

app.run(port=3000)
