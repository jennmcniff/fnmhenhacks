from quart import Quart


def load_blueprints(app: Quart):
    import app.blueprints.files as files
    import app.blueprints.api as api

    app.register_blueprint(files.app)
    app.register_blueprint(api.app)
