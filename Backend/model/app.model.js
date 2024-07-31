import mongoose from "mongoose";

const appSchema= mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})

const App = mongoose.model("App", appSchema);

export default App;