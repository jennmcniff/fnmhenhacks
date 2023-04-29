import quart


class ApiError(Exception):
    """Error type to be raised when there is a problem with an API route."""

    def __init__(self, reason: str, status: int) -> None:
        super().__init__()

        self.reason = reason
        self.status = status

    def to_response(self) -> quart.Response:
        return quart.Response(self.reason, status=self.status)
