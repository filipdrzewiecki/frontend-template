import AxiosMockAdapter from 'axios-mock-adapter';
import BackendServer from './BackendServer';

function mockData() {
    const mock = new AxiosMockAdapter(BackendServer);
    mock.onGet('/users').reply(200, [
        {"name": "Filip"},
        {"name": "Magda"},
        {"name": "Tadeusz"},
        {"name": "Lukasz"},
        {"name": "Jan"}
    ]);
    console.log("jestem w mocku")
    return (mock);
}

export default mockData;