from quart import Quart


def load_blueprints(app: Quart):
    import app.blueprints.files as files

    app.register_blueprint(files.app)
