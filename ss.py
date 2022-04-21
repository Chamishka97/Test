import requests

response = requests.get("https://covid-193.p.rapidapi.com/countries").json()
print(response.status_code)
# response = requests.get("https://api.open-notify.org/astros.json")
# print(response.status_code)