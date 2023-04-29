from quart import Blueprint, request
from app.data import load_data, Business

from rapidfuzz import process

app = Blueprint("api", __name__)

BUISINESSES = load_data()


@app.route("/api/search/<name>")
def search(name: str):
    """
    The name is used to fuzzy search against "trade_name".
    `zip` is used a filter.
    """

    businesses = process.extract(
        name, {b: b.trade_name for b in BUISINESSES}, limit=None, score_cutoff=70
    )

    print(list(b[1] for b in businesses))

    return filter_request([b[2] for b in businesses])


@app.route("/api/search")
async def search_():
    """
    Search but without a name.
    """
    return filter_request(BUISINESSES)


def filter_request(buisinesses: list[Business]):
    zip = request.args.get("zip")

    if zip:
        buisinesses = filter(lambda b: b.zip == zip, BUISINESSES)

    return [business.to_json() for business in buisinesses]
