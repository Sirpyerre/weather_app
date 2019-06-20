import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';

const transformForecast = data =>(
    data.list.filter(item => (
        moment.unix(item.dt).hour() === 2 ||
        moment.unix(item.dt).hour() === 4 ||
        moment.unix(item.dt).hour() === 6 ||
        moment.unix(item.dt).hour() === 10 ||
        moment.unix(item.dt).hour() === 12 ||
        moment.unix(item.dt).hour() === 14 ||
        moment.unix(item.dt).hour() === 16 ||
        moment.unix(item.dt).hour() === 18 ||
        moment.unix(item.dt).hour() === 20 ||
        moment.unix(item.dt).hour() === 22 ||
        moment.unix(item.dt).hour() === 24
    )).map(item => (
        {
            weekDay:moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item)
        }
    ))
);

export default transformForecast;