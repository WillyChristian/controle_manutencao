require('dotenv').config
const { GoogleSpreadsheet } = require('google-spreadsheet')
const doc = new GoogleSpreadsheet(process.env.SHEET_ID)

export default async (req, res) => {
    try{
        const email = process.env.GOOGLE_ACCOUNT_EMAIL
        const key = process.env.GOOGLE_PRIVATE_KEY
        await doc.useServiceAccountAuth({
            client_email: email,
            private_key: key
        })
        await doc.loadInfo()
        const sheet = await doc.sheetsByIndex[0]
        await sheet.loadCells('A1:O6')

        // geting all line info
        const agenda = []
        for(let i = 1; i <= 14; i++ ){
            const status = sheet.getCell(3,i).value
            const time = sheet.getCell(2,i).value
            agenda.push({
                time,status
            })
        }
        res.send(agenda)
    }catch(err){
        console.log(err)
    }
}