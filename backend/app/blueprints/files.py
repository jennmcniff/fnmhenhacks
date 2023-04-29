import asyncio
from quart import Blueprint, Response

app = Blueprint("files", __name__)


async def serve_file(filename: str) -> Response:
    """
    Serve a file with a certain path.
    """
    with await asyncio.get_event_loop().run_in_executor(
        None, open, f"../frontend/build/{filename}", "rb"
    ) as f:
        resp = Response(await asyncio.get_event_loop().run_in_executor(None, f.read))

    extension = filename.split(".")[-1]

    # I hate this code but I am not going to fix this.
    if extension == "html":
        headers = "text/html"
    elif extension == "js":
        headers = "text/javascript"
    elif extension == "css":
        headers = "text/css"
    else:
        headers = None

    if headers:
        resp.headers.remove("Content-Type")
        resp.headers.add_header("Content-Type", headers)

    return resp


@app.route("/public/<path:filename>")
async def route(filename: str) -> Response:
    print(filename)
    return await serve_file(filename)
