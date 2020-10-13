const axios = require('axios');

let sheetData = [];

module.exports = {
    setSheetData: () => {
        axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEETS_ID}/values/A1%3AD100?key=${process.env.GOOGLE_SHEETS_KEY}`).then(res => {

            let data = [];
            
            res.data.values.map((arr, index) => {

                if (index >= 1) {
                    let newObj = {};

                    newObj.amount = parseInt(arr[0]);
                    newObj.description = arr[1];
                    newObj.goalReached = JSON.parse(arr[2].toLowerCase());
                    newObj.forMods = JSON.parse(arr[3].toLowerCase());

                    data.push(newObj);

                    if (index === res.data.values.length - 1) {
                        sheetData = data;
                    }
                }

            });;
            
        }).catch(err => {
            console.log(err);
        });
    },

    getSheetData: (req, res) => {
        if (sheetData.length > 0) {
            res.send(sheetData);
        } else {
            res.status(500).send('Unable to retrieve Stream Goals at this time.');
        }
    }
}