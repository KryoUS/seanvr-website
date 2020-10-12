const CronJob = require('cron').CronJob;
const amazon = require('../controllers/amazon');

const minutes = {
    every5: () => new CronJob('00 */5 * * * *', () => {
        amazon.setList();
    }, null, false, 'America/Denver', null, true),


}

module.exports = {
    jobs: () => {
        minutes.every5();
    }
}