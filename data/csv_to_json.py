"""
This file parses the Delaware_Business_Licenses.csv file to delaware_buisiness.json
"""

from __future__ import annotations

import typing as t
import csv
import json


def convert_geocoded_location(loc: str) -> dict[str, str]:
    if not loc:
        return {}

    latitude, longitude = loc.splitlines()[-1][1:-1].split(", ")

    return {
        "latitude": float(latitude),
        "longitude": float(longitude),
    }


def main():
    reader = csv.DictReader(open("Delaware_Business_Licenses.csv"))

    def convert(data: dict[str, str]) -> dict[str, t.Any]:
        return {
            "buisiness_name": data["Business name"],
            "trade_name": data["Trade name"],
            "buisiness_activity": data["Business Activity"],
            "address_1": data["Address 1"],
            "address_2": data["Address 2"],
            "city": data["City"],
            "state": data["State"],
            "zip": data["Zip"],
            "country": data["Country"],
            "location": convert_geocoded_location(data["Geocoded Location"]),
        }

    json.dump(
        list(map(convert, reader)), open("delaware_buisiness.json", "w"),
        indent=4
    )


if __name__ == "__main__":
    main()
