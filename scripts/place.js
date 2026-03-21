// ================================
// FOOTER (Dynamic Year + Modified)
// ================================
const yearEl = document.getElementById("year");
const modifiedEl = document.getElementById("lastModified");

yearEl.textContent = new Date().getFullYear();
modifiedEl.textContent = document.lastModified;


// ================================
// STATIC WEATHER VALUES
// (must match your HTML content)
// ================================
const temperature = 8;     // °C
const windSpeed = 10;     // km/h


// ================================
// WIND CHILL FUNCTION (ONE LINE)
// Metric formula (°C, km/h)
// ================================
function calculateWindChill(temp, speed) {
  return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}


// ================================
// CHECK CONDITIONS + DISPLAY
// ================================
const windChillEl = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temperature, windSpeed);
  windChillEl.textContent = `${windChill.toFixed(1)} °C`;
} else {
  windChillEl.textContent = "N/A";
}