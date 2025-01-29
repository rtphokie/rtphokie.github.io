import pandas as pd
from pprint import pprint

# Adjust display options
pd.set_option('display.max_columns', None)
pd.set_option('display.width', None)

# Read the CSV file
df = pd.read_csv('spacecraftlist.csv')

df = df.fillna('')

lines = ['const flags = {',
         "korea: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/2560px-Flag_of_South_Korea.svg.png',",
         "isro: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png',",
         "jaxa: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/2560px-Flag_of_Japan.svg.png',",
         "uae: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1280px-Flag_of_the_United_Arab_Emirates.svg.png',",
         "italy: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1920px-Flag_of_Italy.svg.png',",
         "esa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/2560px-Flag_of_Europe.svg.png'",
         '}',
         'const spacecraftList =[',
         ]

for index, row in df.iterrows():
    # id,name,mission,location,flags,launch,note
    id = row['id'].strip()
    title = row['name'].strip()
    mission = row['mission'].replace("'", "\\'").strip()
    flag = row['flag']
    if len(flag) == 0:
        flag = 'null'
    else:
        flag = f"flags.{flag}"
    launchdate = row['launch']
    note = row['note'].replace("'", "\\'").strip()
    lines.append(
        f" {{id: '{id}', title: '{title}', mission: '{mission}', flag: {flag}, launchdate: '{launchdate}', note: '{note}'}},")
    # lines.append(f"        {id: \'{row['id']}\', title: \'{row['name']}\', mission: \'{row['mission']}\', location: \'{row['location']}\' , flag: {row['flag']}}, launchdate: \'{row['launchdate']}\', note: \'{row['note']}\'")

lines.append(']')

lines.append('''const spacecraftMap = spacecraftList.reduce((result, dict) => {
    result[dict.id] = dict;
    result[dict.id].last_dish = null;
    result[dict.id].last_site = null;
    result[dict.id].total_down = 0;
    result[dict.id].first_seen = null;
    result[dict.id].total_sec = 10; // seed at refresh rate
    return result;
}, {});''')

pprint(lines)

open('spacecraftlist.js', 'w').writelines([line + '\n' for line in lines])
