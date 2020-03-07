import os
from flask import Flask, g
from flaskr import index


# Flask app factory pattern
def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='flask_home_page',
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    app.register_blueprint(index.app)
    app.add_url_rule('/', endpoint='index')
    # with app.app_context():
    #     g.first_rss = ''
    #     # index.home()

    return app


