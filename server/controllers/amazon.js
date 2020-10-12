const AWS = require('aws-sdk');
let bucketList = {};

AWS.config.update({ region: 'us-west-2' });
s3 = new AWS.S3({apiVersion: '2006-03-01'});

let bucketParams = {
    Bucket: 'seanvr',
    Prefix: 'gallery/'
};

module.exports = {
    setList: () => {
        s3.listObjects(bucketParams, (err, data) => {
            if (err) {
                console.log(new Date(), "-Amazon S3 Error!-", err);
            } else {
                bucketList = data;
            }
        });
    },

    getList: (req, res) => {
        if (bucketList.Contents) {
            res.send(bucketList);
        } else {
            res.status(500).send('Unable to retrieve Gallery at this time.');
        }
    }

}