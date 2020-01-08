from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect,
    flash)

import pymongo

app = Flask(__name__)
app.secret_key = "test"

def convertInt(str):
    return int(''.join(str.split(',')))


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/map")
def map():
    return render_template("map.html")

@app.route("/weather")
def weather():
    return render_template("weather.html")

@app.route("/prediction")
def prediction():
    return render_template("prediction.html")

@app.route("/form")
def form():
    return render_template("form.html")

@app.route("/send", methods=["GET","POST"])
def send():
    if request.method=="POST":
        return redirect('/')

    return render_template("form.html")

@app.route("/weather_data_api")
def weather_data():
    conn = "mongodb://localhost:27017"
    client = pymongo.MongoClient(conn)
    db = client.wildfire
    weather_data = db.yearly_weather_data
    weather_list = []

    for x in weather_data.find({}, {"_id":0}):
        weather_list.append(x)

    return jsonify(weather_list)

@app.route("/fires_complete_api")
def fires():
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["wildfire"]
    collection_names = mydb.list_collection_names()

    fires_all_years = []

    for coll in collection_names:
        if "ca_wildfires" in coll:
            mycoll = mydb[coll]
            for x in mycoll.find({}, {"_id":0, "Containment": 0}):
                all_fire_dict = {}
                for k,v in x.items(): 
                    if k == 'Coordinates':
                        all_fire_dict['latitude'] = v[0]
                        all_fire_dict['longitude'] = v[1]
                    elif k == 'Name':
                        all_fire_dict['name'] = v
                    elif k == 'County':
                        all_fire_dict['country'] = v
                    elif k == 'Acres Burned':
                        try:
                            all_fire_dict['acres'] = convertInt(v)
                        except ValueError:
                            all_fire_dict['acres'] = 0
                    elif k == 'Start Date': 
                        all_fire_dict['start'] = v
                        all_fire_dict['year'] = v.split('/')[-1]
                    elif k == 'End Date': 
                        all_fire_dict['end'] = v
                    elif k == 'Cause':
                        all_fire_dict['cause'] = v

                    fires_all_years.append(all_fire_dict)  

    return jsonify(fires_all_years)                

# 2019 data
@app.route("/fires_2019_api")
def fire_2019():
    conn = "mongodb://localhost:27017"
    client = pymongo.MongoClient(conn)
    db = client.wildfire
    fire_2019 = db.ca_wildfires_2019
    fire_list_2019 = []

    for x in fire_2019.find({}, {"_id":0, "Containment": 0}):
        fire_list_2019.append(x)
    new_fire_list = []

    for item in fire_list_2019:
        new_fire_dict = {}
        for k,v in item.items():
            if k == 'Coordinates':
                new_fire_dict['latitude'] = v[0]
                new_fire_dict['longitude'] = v[1]
            elif k == 'Name':
                new_fire_dict['name'] = v
            elif k == 'County':
                new_fire_dict['country'] = v
            elif k == 'Acres Burned':
                try:
                    new_fire_dict['acres'] = convertInt(v)
                except ValueError:
                    new_fire_dict['acres'] = 0
            elif k == 'Start Date': 
                new_fire_dict['start'] = v
            elif k == 'End Date': 
                new_fire_dict['end'] = v
            
        new_fire_list.append(new_fire_dict)

    final_fire_list = []

    for item in new_fire_list:
        if len(item) == 0:
            continue
        else:
            final_fire_list.append(item)

    return jsonify(final_fire_list)

# 2018 data
@app.route("/fires_2018_api")
def fire_2018():
    conn = "mongodb://localhost:27017"
    client = pymongo.MongoClient(conn)
    db = client.wildfire
    fire_2018 = db.ca_wildfires_2018
    fire_list_2018 = []

    for x in fire_2018.find({}, {"_id":0, "Containment": 0}):
        fire_list_2018.append(x)
    new_fire_list = []

    for item in fire_list_2018:
        new_fire_dict = {}
        for k,v in item.items():
            if k == 'Coordinates':
                new_fire_dict['latitude'] = v[0]
                new_fire_dict['longitude'] = v[1]
            elif k == 'Name':
                new_fire_dict['name'] = v
            elif k == 'County':
                new_fire_dict['country'] = v
            elif k == 'Acres Burned':
                try:
                    new_fire_dict['acres'] = convertInt(v)
                except ValueError:
                    new_fire_dict['acres'] = 0
            elif k == 'Start Date': 
                new_fire_dict['start'] = v
            elif k == 'End Date': 
                new_fire_dict['end'] = v
            
        new_fire_list.append(new_fire_dict)

    final_fire_list = []

    for item in new_fire_list:
        if len(item) == 0:
            continue
        else:
            final_fire_list.append(item)

    return jsonify(final_fire_list)

# 2017 data
@app.route("/fires_2017_api")
def fire_2017():
    conn = "mongodb://localhost:27017"
    client = pymongo.MongoClient(conn)
    db = client.wildfire
    fire_2017 = db.ca_wildfires_2017
    fire_list_2017 = []

    for x in fire_2017.find({}, {"_id":0, "Containment": 0}):
        fire_list_2017.append(x)
    new_fire_list = []

    for item in fire_list_2017:
        new_fire_dict = {}
        for k,v in item.items():
            if k == 'Coordinates':
                new_fire_dict['latitude'] = v[0]
                new_fire_dict['longitude'] = v[1]
            elif k == 'Name':
                new_fire_dict['name'] = v
            elif k == 'County':
                new_fire_dict['country'] = v
            elif k == 'Acres Burned':
                try:
                    new_fire_dict['acres'] = convertInt(v)
                except ValueError:
                    new_fire_dict['acres'] = 0
            elif k == 'Start Date': 
                new_fire_dict['start'] = v
            elif k == 'End Date': 
                new_fire_dict['end'] = v
            
        new_fire_list.append(new_fire_dict)

    final_fire_list = []

    for item in new_fire_list:
        if len(item) == 0:
            continue
        else:
            final_fire_list.append(item)

    return jsonify(final_fire_list)

# 2016 data
@app.route("/fires_2016_api")
def fire_2016():
    conn = "mongodb://localhost:27017"
    client = pymongo.MongoClient(conn)
    db = client.wildfire
    fire_2016 = db.ca_wildfires_2016
    fire_list_2016 = []

    for x in fire_2016.find({}, {"_id":0, "Containment": 0}):
        fire_list_2016.append(x)
    new_fire_list = []

    for item in fire_list_2016:
        new_fire_dict = {}
        for k,v in item.items():
            if k == 'Coordinates':
                new_fire_dict['latitude'] = v[0]
                new_fire_dict['longitude'] = v[1]
            elif k == 'Name':
                new_fire_dict['name'] = v
            elif k == 'County':
                new_fire_dict['country'] = v
            elif k == 'Acres Burned':
                try:
                    new_fire_dict['acres'] = convertInt(v)
                except ValueError:
                    new_fire_dict['acres'] = 0
            elif k == 'Start Date': 
                new_fire_dict['start'] = v
            elif k == 'End Date': 
                new_fire_dict['end'] = v
            
        new_fire_list.append(new_fire_dict)

    final_fire_list = []

    for item in new_fire_list:
        if len(item) == 0:
            continue
        else:
            final_fire_list.append(item)

    return jsonify(final_fire_list)

# 2015 data
@app.route("/fires_2015_api")
def fire_2015():
    conn = "mongodb://localhost:27017"
    client = pymongo.MongoClient(conn)
    db = client.wildfire
    fire_2015 = db.ca_wildfires_2015
    fire_list_2015 = []

    for x in fire_2015.find({}, {"_id":0, "Containment": 0}):
        fire_list_2015.append(x)
    new_fire_list = []

    for item in fire_list_2015:
        new_fire_dict = {}
        for k,v in item.items():
            if k == 'Coordinates':
                new_fire_dict['latitude'] = v[0]
                new_fire_dict['longitude'] = v[1]
            elif k == 'Name':
                new_fire_dict['name'] = v
            elif k == 'County':
                new_fire_dict['country'] = v
            elif k == 'Acres Burned':
                try:
                    new_fire_dict['acres'] = convertInt(v)
                except ValueError:
                    new_fire_dict['acres'] = 0
            elif k == 'Start Date': 
                new_fire_dict['start'] = v
            elif k == 'End Date': 
                new_fire_dict['end'] = v
            
        new_fire_list.append(new_fire_dict)

    final_fire_list = []

    for item in new_fire_list:
        if len(item) == 0:
            continue
        else:
            final_fire_list.append(item)

    return jsonify(final_fire_list)

# 2014 data
@app.route("/fires_2014_api")
def fire_2014():
    conn = "mongodb://localhost:27017"
    client = pymongo.MongoClient(conn)
    db = client.wildfire
    fire_2014 = db.ca_wildfires_2019
    fire_list_2014 = []

    for x in fire_2014.find({}, {"_id":0, "Containment": 0}):
        fire_list_2014.append(x)
    new_fire_list = []

    for item in fire_list_2014:
        new_fire_dict = {}
        for k,v in item.items():
            if k == 'Coordinates':
                new_fire_dict['latitude'] = v[0]
                new_fire_dict['longitude'] = v[1]
            elif k == 'Name':
                new_fire_dict['name'] = v
            elif k == 'County':
                new_fire_dict['country'] = v
            elif k == 'Acres Burned':
                try:
                    new_fire_dict['acres'] = convertInt(v)
                except ValueError:
                    new_fire_dict['acres'] = 0
            elif k == 'Start Date': 
                new_fire_dict['start'] = v
            elif k == 'End Date': 
                new_fire_dict['end'] = v
            
        new_fire_list.append(new_fire_dict)

    final_fire_list = []

    for item in new_fire_list:
        if len(item) == 0:
            continue
        else:
            final_fire_list.append(item)

    return jsonify(final_fire_list)

if __name__ == "__main__":
    app.run(debug=True)