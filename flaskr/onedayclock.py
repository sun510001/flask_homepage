# coding:utf-8
import time
import requests
import re
import urllib.request as urllib2
import socket
from bs4 import BeautifulSoup
from requests.auth import HTTPDigestAuth
import os

socket.setdefaulttimeout(10)

# catch webtext
url = ''
url2 = ''
url3 = ''
url4 = ''
url5 = ''


# choose the library time
def choosetime(color):
    colordic = {
        '#99FF99': "9:00 ~ 17:00",
        '#FFCCCC': "休館",
        '#33CCFF': "10:00 ~ 17:00",
        'white': "9:00 ~ 21:30",
        '#FFCC00': "10:00 ~ 18:15",
        '#FFFF99': "8:30 ~ 21:30"}
    ctime = colordic.get(color)
    #  print("ctime =", ctime)
    return ctime


# catch only for library time
def catch_page(datetext):
    time.sleep(2)
    req = requests.get(url4, timeout=10)
    req.encoding = 'utf-8'
    tm = time.localtime()
    #  print(req.text)
    #  findtext = re.findall(datetext + r'">.*</time><div class="eventitem" style="background-color: (.*?);', req.text)
    findtext = re.findall(
        datetext +
        r'">(%s)</time><div class="eventitem" style="background-color: (.*?);' %
        tm.tm_mday,
        req.text)
    return findtext


# catch the webtext
def catch_web(url, num):
    time.sleep(2)
    airport_id = os.popen(
        "/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -I | awk -F': ' '/ SSID/ {print $2}'").read()
    # print("----->", airport_id)
    if re.findall(r"", airport_id):
        # print("--------->in Lab")
        proxy_http = ""
        proxy_https = ""
        proxy_dict = {
            "http": proxy_http,
            "https": proxy_https,
        }
        req = requests.get(url, timeout=25, proxies=proxy_dict)

    else:
        # print("--------->out of Lab")
        req = requests.get(url, timeout=15)

    req.encoding = 'utf-8'

    #  print(req.text)
    if num == 1:
        text_temp = []
        shop_name = re.findall(
            r'<table class="dinfo_tab" summary="(.*?)">', req.text)
        waiting_people = re.findall(
            r'<p class="store-avail">(.*?)</p>', req.text)
        text_temp.append("QBHouse {}店: ".format(shop_name[0]))
        text_temp.append("{}\n".format(waiting_people[0]))
    elif num == 2:
        fx = re.findall(
            r'<span style="color:Red;font-weight: bold;">(.*?)</span>',
            req.text)
        text_temp = "银联汇率:{}\n".format(fx[0])
    elif num == 3:
        text_temp = []
        w_date = re.findall(r'<p class="date">(.*?)</p>', req.text)
        w_weather = re.findall(
            r'<p class="pict"><img src=.*>(.*?)</p>', req.text)
        w_degree = re.findall(
            r'<li class=".*"><em>(.*?)</em>.*</li>', req.text)
        w_rain = re.findall(
            r'<td>(.*?)</td>', req.text)
        save_list_rain = []
        for i in range(len(w_rain)):
            if len(w_rain[i]) < 8:
                save_list_rain.append(w_rain[i])
        # print('++', save_list_rain)
        text_temp.append(
            "今日: {}  {}  {}{}{}{}{}\n".format(
                w_date[0],
                w_weather[0],
                w_degree[1],
                "℃",
                "~",
                w_degree[0],
                "℃"))
        text_temp.append(
            "明日: {}  {}  {}{}{}{}{}\n".format(
                w_date[1],
                w_weather[1],
                w_degree[3],
                "℃",
                "~",
                w_degree[2],
                "℃"))
        text_temp.append(save_list_rain)

    elif num == 4:
        #  kyuukou rss
        text_temp = ''
        req.encoding = 'Shift_JIS'
        kk0_text = re.findall(r'<TD.*><B>(.*)</B></TD>', req.text)
        kk_text = re.findall(r'<TD.*>(.*)</TD>', req.text)
        ttab = len(kk0_text)
        ntab = len(kk_text)
        if ttab == 0:
            text_temp = "休講: 情報なし\n"
        else:
            flag = int(ntab / ttab)
            text_temp02 = ''
            for j in range(0, flag - 1):
                text_temp01 = ''
                for i in range(ttab * (j + 1), ttab * (j + 2) - 1):
                    text_temp01 += "{} ".format(kk_text[i])
                text_temp += text_temp01
    return text_temp


def changeline(text, addtext):
    if len(text) > 29:
        addtext += text[:28] + "\<br\>" + text[28:] + "\<br\>"
    else:
        addtext += text + "\<br\>"
    return addtext


def wiki_scrapy():
    try:
        auth = urllib2.HTTPDigestAuthHandler()
        auth.add_password('')

        time.sleep(2)
        url = ""
        req = requests.get(url, timeout=10, auth=HTTPDigestAuth())
        soup = BeautifulSoup(req.text, 'html.parser', from_encoding="EUC-JP")

        find_div = soup.find('div', {'id': 'menubar'}).find('div').find_all('a')
        link_box_all = []
        for lists in find_div:
            title = lists.get('title')
            link = lists.get('href')
            link_box = [title, link]
            link_box_all.append(link_box)
    except Exception:
        link_box_all = [['No Data or error', '']]

    # print(link_box_all)

    try:
        find_div2 = soup.find('div', {'id': 'menubar'}).find('div', {'id': 'treeview'}) \
            .find_all('li', {'class': 'collapsed'})
        for i in range(len(find_div2)):
            zemi = find_div2[i].find('a', {'title': 'ゼミ'})
            # print(type(zemi))
            # print(isinstance(zemi, type(None)))
            if not isinstance(zemi, type(None)):
                find_in_col = find_div2[i].find('ul', {'style': 'display:none;'}).find_all('a')
                break
        link_box_all2 = []
        for lists2 in find_in_col:
            title2 = lists2.get('title')
            link2 = lists2.get('href')
            link_box2 = [title2, link2]
            link_box_all2.append(link_box2)
    except Exception:
        link_box_all2 = [['No Data or error', '']]

    try:
        list_temp = [data_str[0] for data_str in link_box_all2]
        date_list = [str_temp.split('/')[1] for str_temp in list_temp]
        today_reg = time.strftime("%Y-%m-%d", time.localtime())
        date_list_new = date_list + [today_reg]
        date_list_sorted = sorted(date_list_new)
        today_index = date_list_sorted.index(today_reg)
        show_date_index = today_index + 1
        next_zemi_date = date_list_sorted[show_date_index]  # find the next zemi date
        url_index = date_list.index(next_zemi_date)
        next_zemi_url = "" + (link_box_all2[url_index][1])[1:]
    except Exception:
        next_zemi_date = "x"

    try:
        time.sleep(2)
        # number_list = []
        # zemi_content_list = []
        req_next = requests.get(next_zemi_url, timeout=10, auth=HTTPDigestAuth())
        soup_next = BeautifulSoup(req_next.text, 'html.parser', from_encoding="EUC-JP")
        zemi_title = soup_next.find('td', {'valign': 'top'}).find('h3', {'id': 'content_1_0'}).text
        # zemi_content = soup_next.find('td', {'valign': 'top'}).find_all('ul', {'class': 'list1'})
        zemi_content2 = soup_next.find('td', {'valign': 'top'}).find('div', {'id': 'body'}).find_all('ul',
                                                                                                     {'class': 'list1'})

    # print(number_list)
    except Exception:
        zemi_title = "No title"
        zemi_content2 = ["No data of next zemi content."]
        next_zemi_url = "#"
    #     number_list = ["Nobody"]

    try:
        time.sleep(2)
        url_rss = ""
        rss_content = requests.get(url_rss, timeout=10, auth=HTTPDigestAuth())
        soup_rss = BeautifulSoup(rss_content.text, 'html.parser', from_encoding="EUC-JP")
        first_rss = soup_rss.find('dc:date').text
        # first_rss
        # print('rss',first_rss)
    except Exception:
        first_rss = ""
        # pass
    # print("---->", zemi_title)
    # print("---->", zemi_content_list)
    # print("---->", number_list)
    return link_box_all, next_zemi_date, next_zemi_url, zemi_content2, zemi_title, first_rss


def catch_and_rss():
    # error_flag = 0
    try:
        weather_result = catch_web(url3, 3)
    except Exception as e:
        weather_result = "WEB_ERROR:{}".format(e)
    # error_flag = 1

    # library time
    tm = time.localtime()
    datetext = "{}/{:0>2}/{:0>2}".format(tm.tm_year, tm.tm_mon, tm.tm_mday)
    try:
        color = catch_page(datetext)[0]
    except Exception:
        color = [0, 'white']
    ptime = choosetime(color[1])

    # course stop
    # try:
    #     course_stop = catch_web(url5, 4, proxyDict)
    # except Exception:
    #     course_stop = "WEB_ERROR!"

    library = "図書館開館時間: {}".format(ptime)
    try:
        unionpay = catch_web(url2, 2)
    except Exception:
        unionpay = "银联汇率: WEB_ERROR!"
        # error_flag = 1
    try:
        qbhouse = catch_web(url, 1)
    except Exception:
        qbhouse = ["QBHouse: WEB_ERROR!"]
        # error_flag = 1

    # lab wiki
    link_box_all, next_zemi_date, next_zemi_url, zemi_content2, zemi_title, first_rss = wiki_scrapy()
    # try:
    #     first_rss = link_box_all[0][0]
    #     # wiki_result = wiki_text
    # except Exception:
    #     first_rss = ''
    #     # wiki_result = "RSS_ERROR!"

    temp_refresh = "PukiWiki Recent Update " + first_rss

    return weather_result, library, unionpay, qbhouse, link_box_all, next_zemi_date, next_zemi_url, zemi_content2, zemi_title, temp_refresh, first_rss

# def main():
#     # print(catch_and_rss())
#     wiki_scrapy()
#
#
# if __name__ == '__main__':
#     main()
