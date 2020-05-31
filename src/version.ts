import packageJSON from '../package.json';
import preval from 'preval.macro';
import moment from 'moment';
const buildTimestamp = preval`module.exports = new Date().getTime();`;

// App version definition
export const APP_VERSION = `${packageJSON.version} - ${moment(buildTimestamp).format('DD.MM.YYYY HH:mm:ss')}`;