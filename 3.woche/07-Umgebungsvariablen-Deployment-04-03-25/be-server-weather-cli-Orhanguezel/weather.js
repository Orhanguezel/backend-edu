import fetch from "node-fetch";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config();

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = process.env.BASE_URL;

const stadt = process.argv[2];

if (!stadt) {
  console.error(colors.red.bold("Bitte geben Sie einen Städtenamen ein!"));
  process.exit(1);
}

const weatherDescriptions = {
  1000: "☀️ Klarer Himmel",
  1100: "🌤 Meistens klar",
  1101: "⛅ Teilweise bewölkt",
  1102: "☁️ Bewölkt",
  2000: "🌫 Nebel",
  2100: "🌁 Leichter Nebel",
  4000: "🌦 Leichter Regen",
  4200: "🌧 Mäßiger Regen",
  4001: "⛈ Starker Regen",
  5000: "🌨 Schnee",
  5100: "❄️ Leichter Schnee",
  5101: "🌨❄️ Starker Schneefall",
  6000: "🌧❄️ Gefrierender Nieselregen",
  6001: "🌧❄️ Gefrierender Regen",
  6200: "🌧❄️ Leichter gefrierender Regen",
  6201: "🌧❄️ Starker gefrierender Regen",
  7000: "⛈⚡ Gewitter",
  7101: "⛈⚡⚡ Starkes Gewitter",
  7102: "⛈ Leichtes Gewitter",
};

async function getWeather(stadt) {
  const url = `${BASE_URL}${stadt}&apikey=${API_KEY}&unit_system=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Wetterdaten konnten nicht abgerufen werden!");
    }

    const data = await response.json();
    const temperature = data.data.values.temperature;
    const weatherCode = data.data.values.weatherCode;
    const weatherText = weatherDescriptions[weatherCode];
    const time = data.data.time;
    const temperatureApparent = data.data.values.temperatureApparent;
    const windDirection = data.data.values.windDirection;
    const windSpeed = data.data.values.windSpeed;
    const precipitationProbability = data.data.values.precipitationProbability;

    console.log(colors.rainbow("\n@@@@@@@@@@@@@@@@@@@@@@@@"));
    console.log(colors.bgYellow.black.bold("   🌍 WETTER PROGRAMM   "));
    console.log(colors.rainbow("@@@@@@@@@@@@@@@@@@@@@@@@\n"));

    console.log(colors.cyan.bold(`🕒 Zeit: `) + colors.white.bold(`${time}`));
    console.log(colors.green.bold(`📍 Stadt: `) + colors.white.bold(`${stadt}`));
    console.log(colors.yellow.bold(`🌡 Temperatur: `) + colors.white.bold(`${temperature}°C`));
    console.log(colors.red.bold(`🌡 Gefühlte Temperatur: `) + colors.white.bold(`${temperatureApparent}°C`));
    console.log(colors.magenta.bold(`☁ Wetterbedingungen: `) + colors.white.bold(`${weatherText}`));
    console.log(colors.blue.bold(`🌬 Windrichtung: `) + colors.white.bold(`${windDirection}°`));
    console.log(colors.bgBlue.white.bold(`💨 Windgeschwindigkeit: `) + colors.white.bold(`${windSpeed} km/h`));
    console.log(colors.bgRed.white.bold(`💧 Niederschlagswahrscheinlichkeit: `) + colors.white.bold(`${precipitationProbability}%`));

    console.log(colors.rainbow("\n@@@@@@@@@@@@@@@@@@@@@@@@\n"));
  } catch (error) {
    console.error(colors.bgRed.white.bold(`❌ Fehler: ${error.message}`));
  }
}

getWeather(stadt);
