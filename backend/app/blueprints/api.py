from quart import Blueprint, request
from app.data import load_data, Business
from app.errors import ApiError
import math

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

    return filter_request([b[2] for b in businesses])


@app.route("/api/search")
async def search_():
    """
    Search but without a name.
    """
    return filter_request(BUISINESSES)


def dist(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    """Get this distance between latitude and longitude in miles."""
    lat1, lon1, lat2, lon2 = (
        math.radians(lat1),
        math.radians(lon1),
        math.radians(lat2),
        math.radians(lon2),
    )
    return (
        math.acos(
            math.sin(lat1) * math.sin(lat2)
            + math.cos(lat1) * math.cos(lat2) * math.cos(lon1 - lon2)
        )
        * 3958.8
    )


def filter_request(buisinesses: list[Business]):
    zip = request.args.get("zip")

    if zip:
        buisinesses = filter(lambda b: b.zip == zip, BUISINESSES)

    location = request.args.get("location")
    if location:
        try:
            latitude, longitude, miles = location.split(",")
            latitude, longitude, miles = float(latitude), float(longitude), float(miles)

        except Exception:
            raise ApiError(
                "Coordinates must be suplied as coordinate pair and distance."
                " Ex. ?location=latitude,longitude,dist",
                406,
            )

        buisinesses = filter(
            lambda b: b.location.latitude
            and dist(latitude, longitude, b.location.latitude, b.location.longitude)
            < miles,
            buisinesses,
        )

        print(buisinesses)

    return [business.to_json() for business in buisinesses]
