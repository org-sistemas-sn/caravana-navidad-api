import { getData, getConfig, toggleGPS } from './caravana.controller.js';

const caravanaRoutes = (app) => {
    app.get('/tracking', getData)
    app.get('/config', getConfig)   
    app.post('/gps', toggleGPS)
}

export default caravanaRoutes;

