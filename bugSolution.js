```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("650e585a6a287917a6c16207")}, {"$inc": {"counter": 1}});
```