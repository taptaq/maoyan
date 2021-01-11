import time
import json
from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait
 
 
class Test:
    url = 'https://maoyan.com/films/1334342?$from=canary&channelId=4'
    options = webdriver.ChromeOptions()
    # 不加载图片,加快访问速度
    options.add_experimental_option("prefs", {"profile.managed_default_content_settings.images": 2})
    # 此步骤很重要，设置为开发者模式，防止被各大网站识别出来使用了Selenium
    options.add_experimental_option('excludeSwitches', ['enable-automation'])
    # 添加本地代理
    options.add_argument("--proxy--server=127.0.0.1:8080")
    # 添加UA
    ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88'
    # ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 (compatible; Baiduspider-render/2.0; +http://www.baidu.com/search/spider.html)'
    # ua = 'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)'
    options.add_argument('user-agent=' + ua)
 
    driver = webdriver.Chrome(options=options)
    driver.maximize_window()
    wait = WebDriverWait(driver, 10)
    driver.get(url)
    time.sleep(3)
    # driver.refresh()
 
    result = []
    items = driver.find_elements_by_css_selector('div.wrapper')
    for item in items:
        name = item.find_element_by_css_selector('div.celeInfo-right div.movie-brief-container h1.name').text
        print(name)
        ename = item.find_element_by_css_selector('div.celeInfo-right div.movie-brief-container div.ename').text
        print(ename)
        mtype = item.find_element_by_css_selector('div.celeInfo-right div.movie-brief-container ul li.ellipsis').text
        print(mtype)
        #star = item.find_element_by_css_selector('div.movie-info-top div.movie-desc div.movie-desc-top div.movie-other-info div.actors a').text
        #print(star)
        #time = item.find_element_by_css_selector('div.movie-info-top div.movie-desc div.movie-desc-top div.movie-other-info div.movie-show-time span').text
        #print(time)
        #brief = item.find_element_by_css_selector('brief-introduction div.content p.line-clamp').text
        #print(brief)
        img = item.find_element_by_css_selector('div.celeInfo-left div.avatar-shadow img').get_attribute('src')
        print(img)
        one = {}
        one['name'] = name
        one['ename'] = ename
        one['mtype'] = mtype
        one['star'] = ''
        one['time'] = ''
        one['brief'] = ''
        one['img'] = img
        result.append(one)
 
 
    with open('G:\\网页设计\有关项目\猫眼电影\maoy\data.json', 'w', encoding='utf-8') as file:
        file.write(json.dumps(result, indent=2, ensure_ascii=False))
 
    #time.sleep(10)
    # driver.close()  # 关闭浏览器
