//GOD IS LOVE
//GOD IS LOVE
//GOD IS LOVE
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://hennashygy2005:monmalu@cluster0.ty2lilq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err))