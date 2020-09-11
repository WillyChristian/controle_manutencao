require('dotenv').config
const { GoogleSpreadsheet } = require('google-spreadsheet')
const credential = require('../../credentials.json')
const doc = new GoogleSpreadsheet("1ZSQAkbstQaIpJvEWvKuemakN-Bne-yGkJwZLCBVC5wk")

export default async (req, res) => {
    try{
        await doc.useServiceAccountAuth(credential)
        await doc.loadInfo()
        await 
        res.send(doc.title)
    }catch(err){
        console.log(err)
    }
}