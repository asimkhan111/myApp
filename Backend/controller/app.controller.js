import App from "../model/app.model.js";



export const getApp = async(req,res) =>{
    try {
        const app = await App.find()
        res.status(200).json(app)
    } catch (error) {
        console.log("Error :", error)
        res.status(500).json(error)
    }
}