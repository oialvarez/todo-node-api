'use strict';

module.exports = (req, res, next) => {
    const message = 'Service is up and running';

    console.info(message);

    res.json({
        code: 'SUCCESS',
        message: message
    });

};