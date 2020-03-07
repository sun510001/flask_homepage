from flask import render_template, Blueprint, request
from flaskr import onedayclock

app = Blueprint('index', __name__)
g_first_rss = ''


@app.route("/")
def home():
    global g_first_rss

    weather_result, library, unionpay, qbhouse, link_box_all, next_zemi_date, next_zemi_url, zemi_content2, zemi_title, temp_refresh, first_rss = onedayclock.catch_and_rss()



    # print("------->", g_first_rss)
    if first_rss != g_first_rss:
        g_first_rss = first_rss
        wiki_color = 'google_point.ico'
    else:
        wiki_color = 'google.ico'

    # print("--_>", first_rss, wiki_color)
    return render_template('base.html', weather_result=weather_result, library=library,
                           unionpay=unionpay, qbhouse=qbhouse, wiki_color=wiki_color, link_box_all=link_box_all,
                           next_zemi_date=next_zemi_date, next_zemi_url=next_zemi_url, zemi_content2=zemi_content2,
                           zemi_title=zemi_title, temp_refresh=temp_refresh)
