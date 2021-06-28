import loki from "lokijs";

const db = new loki('db.json');

db.addCollection("weatherData");

db.saveDatabase();
