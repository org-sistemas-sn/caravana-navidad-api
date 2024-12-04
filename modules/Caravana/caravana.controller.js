import axios from 'axios';
import CaravanaConfig from './caravana.model.js';

export const getData = async (req, res) => {
  const { startDate, endDate, licensePlate } = req.query;

  const url = process.env.MONITOREO_API_URL
  
  if (!req.session.token) {
    req.session.token = await getMonitoreoToken();
  }

  let params = {
    Key: req.session.token,
    StartDate: startDate,
    EndDate: endDate,
    LicensePlate: licensePlate,
    VehicleId: '',
    ExternalId: '',
  };

  try {
    let response = await axios.get(url, { params });
    if (response.data.StatusCode === 403 && response.data.ErrorMessage === 'INVALID_API_KEY') {
        req.session.token = await getMonitoreoToken();
        params.Key = req.session.token;
        response = await axios.get(url, { params });
    }
    res.send(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
};

async function getMonitoreoToken() {
  const url = process.env.MONITOREO_LOGIN_URL

  try {
    const response = await axios.get(url);
    return response.data.Result.Token;
  } catch (error) {
    console.error('Error fetching new token:', error);
    return null;
  }
}

export const getConfig = async (req, res) => {
    try {
        const config = await CaravanaConfig.findOne({ where: { variable: 'gps' } });
        res.json({
            configs: {
                gps: config.value
            }
        });
    } catch (error) {
        console.error('Error fetching config:', error);
        res.status(500).send('Error fetching config');
    }
};

export const toggleGPS = async (req, res) => {
    try {
        const { state } = req.body;
        await CaravanaConfig.update({ value: state }, { where: { variable: 'gps' } });
        res.status(200).send({});
    } catch (error) {
        console.error('Error updating config:', error);
        res.status(500).send('Error updating config');
    }
};

export const postFeedback = async () => {} // guardar el feedback en una tabla