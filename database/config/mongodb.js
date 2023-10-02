
const MongoClient = require('mongodb').MongoClient;
require("dotenv").config();
const MONGO_URI = process.env.MONGODB_URI;

async function getEmpData() {
    let client = await MongoClient.connect(MONGO_URI);
    let connection = client.db('issueTracker'); // Establish connection
    return connection.collection('IssueTracker2023'); // creating a collection and naming it also
}

module.exports = getEmpData;