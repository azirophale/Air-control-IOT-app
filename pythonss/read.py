import urllib3

data=urllib3.request.urlopen(" https://api.thingspeak.com/channels/315672/feeds.json")

print(data.read)



# import sys

# if sys.version_info[0] == 3:
#     from urllib.request import urlopen
# else:
#     # Not Python 3 - today, it is most likely to be Python 2
#     # But note that this might need an update when Python 4
#     # might be around one day
#     from urllib import urlopen


# # Your code where you can use urlopen
# with urlopen("https://api.thingspeak.com/channels/315672/feeds/last.json") as url:
#     s = url.read()

# print(s)
