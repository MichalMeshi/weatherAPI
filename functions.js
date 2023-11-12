
const apiKey = '512c11fc8f1541a35bd7f1445c1e2b18';

const url = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = async (city) => {
    try {
        const options = {
            params: {
                q: city,
                lang: 'he',
                appid: apiKey,
                units: 'metric'
            }
        };
        const res = await axios.get(url, options);
        renderWeatherCard(res.data);
    } catch (error) {
        console.error(error);
    }
}

const weatherContnet = document.getElementById('weatherContnet');

const renderWeatherCard = (data) => {
    weatherContnet.innerHTML += `
    <div class="col-md-5 my-3">
        <div class="card p-4 shadow">
            <div>
                <h1 class="display-6 float-end fw-bolder">${data.name}</h1>
                <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" />
            </div>
            <p class="text-end me-1 text-secondary">${data.weather[0].description}</p>
            <div class="d-flex justify-content-between mt-4">
                <p>לחות</p>
                <p>טמפ' מורגשת</p>
                <p>טמפ' נמדדת</p>
            </div>
            <div class="d-flex justify-content-between mt-2">
                <p class="fs-4">${data.main.humidity}%</p>
                <p class="fs-4">${data.main.feels_like}°C</p>
                <p class="fs-4">${data.main.temp}°C</p>
            </div>
        </div>
    </div>`;
};

export { getWeather }