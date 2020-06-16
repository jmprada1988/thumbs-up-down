import httpClient from './httpClient';

const ENDPOINT = '/figures';

const getAllFigures = () => httpClient.get(ENDPOINT);

export {
  getAllFigures
}