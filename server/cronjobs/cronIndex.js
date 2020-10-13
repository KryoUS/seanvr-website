const CronJob = require('cron').CronJob;
const amazon = require('../controllers/amazon');
const googleSheets = require('../controllers/google-sheets/google-sheets');

const minutes = {
    every5: () => new CronJob('00 */5 * * * *', () => {
        amazon.setList();
        googleSheets.setSheetData();
    }, null, true, 'America/Denver', null, true),


}

module.exports = {
    jobs: () => {
        minutes.every5();
    }
}