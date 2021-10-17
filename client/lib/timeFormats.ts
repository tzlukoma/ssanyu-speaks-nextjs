import moment from 'moment-timezone';
import jstz from 'jstimezonedetect';

export function displayLocalTimeZone(time, format) {
    if (typeof window !== 'undefined') {
        if (!sessionStorage.getItem('timezone')) {
            var tz = jstz.determine() || 'UTC';
            sessionStorage.setItem('timezone', tz.name());
        }
        const currTz = sessionStorage.getItem('timezone');
        const momentTime = moment(time);
        const tzTime = momentTime.tz(currTz);
        const formattedTime = tzTime.format(format);
        return formattedTime;
    } else {
        return null;
    }
}