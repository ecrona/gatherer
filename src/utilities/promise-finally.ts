import { Promise } from 'es6-promise';

Promise.prototype['finally'] = function (f) {
    return this.then(function (value) {
        return Promise.resolve(f()).then(function () {
            return value;
        });
    }, function (err) {
        return Promise.resolve(f()).then(function () {
            throw err;
        });
    });
}