"""
Load and manage data from the json file.
"""

from __future__ import annotations

import dataclasses
import json
import typing as t


@dataclasses.dataclass(unsafe_hash=True)
class Business:
    id: int
    buisiness_name: str
    trade_name: str
    business_activity: str
    address_1: str
    address_2: str
    city: str
    state: str
    zip: str
    country: str
    location: Location

    def to_json(self) -> str:
        return dataclasses.asdict(self)


@dataclasses.dataclass(unsafe_hash=True)
class Location:
    latitude: t.Optional[float] = None
    longitude: t.Optional[float] = None


def load_data() -> list[Business]:
    out = []

    with open("../data/delaware_business.json") as f:
        objs = json.load(f)

        for num, buisiness in enumerate(objs):
            location = buisiness.pop("location")
            out.append(Business(**buisiness, id=num, location=Location(**location)))

    return out
