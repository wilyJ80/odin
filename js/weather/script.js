document.addEventListener('DOMContentLoaded', () => {
	const dateEl = document.querySelector('#date');
	dateEl.textContent = Date();

	const referrerEl = document.querySelector('#referrer');
	referrerEl.textContent = document.referrer;

	const agentEl = document.querySelector('#agent');
	agentEl.textContent = window.navigator.userAgent;

	const latitudeEl = document.querySelector('#latitude');
	const longitudeEl = document.querySelector('#longitude');

	navigator.geolocation.getCurrentPosition((position) => {
		latitudeEl.textContent = position.coords.latitude.toString();
		longitudeEl.textContent = position.coords.longitude.toString();
	});
});

const address = document.querySelector('input[name="address"]');
address.addEventListener('change', (e) => {
	getWeatherData(e.target.value);
});

async function getWeatherData(location) {
	const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${import.meta.env.VITE_VISUAL_CROSSING_KEY}&contentType=json`);
	const json = await response.json();
	displayForecast(json);
};

function displayForecast(json) {
	const forecastEl = document.querySelector('#forecast');
	forecastEl.innerHTML = `
<p>Resolved Address: ${json.resolvedAddress}</p>
<p>Timezone: ${json.timezone}</p>
<p>Latitude: ${json.latitude}</p>
<p>Longitude: ${json.longitude}</p>
<p>Conditions: ${json.currentConditions.conditions}</p>
<p>Description: ${json.description}</p>
<p>Temp: ${json.currentConditions.temp}</p>
<p>Feels like: ${json.currentConditions.feelslike}</p>
<p>Cloud cover: ${json.currentConditions.cloudcover}</p>
<p>Humidity: ${json.currentConditions.humidity}</p>
<p>Precipitation probability: ${json.currentConditions.precipprob}</p>
<p>Sunset: ${json.currentConditions.sunset}</p>
	`;
}
