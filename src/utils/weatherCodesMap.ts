const _rain = [500, 501, 502, 503, 504, 520, 521, 522, 531];
const _snow = [600, 601, 602, 611, 612, 613, 615, 620, 621, 622];
const _thunderstorm = [200, 201, 202, 210, 221, 230, 231, 232];
const _severeStorm = [212];
const _drizzle = [300, 301, 302, 310, 311, 312, 313, 314, 321];
const _clouds = [801, 802, 803, 804];
const _clear = [800];
const _atmosphere = [701, 711, 731, 751, 762, 771, 781];
const _haze = [721];
const _fog = [741];
const _dust = [761];

function slicer(slices: number[], arr: number[]) {
  const inner = [...arr];
  return inner.splice(slices[0], slices[1]);
}

const weatherCodesMap = new Map<string, number[]>([
  ['clear-day', _clear],
  // Rain
  ['rainy-1', slicer([0, 1], _rain)],
  ['rainy-3', slicer([2, 4], _rain)],
  ['rainy-2', slicer([5, _rain.length - 1], _rain)],
  // Snow
  ['snowy-1', slicer([0, 1], _snow)],
  ['snowy-2', slicer([3, _snow.length], _snow)],
  ['snowy-3', [_snow[2]]],
  // Thunderstorm
  ['thunderstorms', _thunderstorm],
  ['severe-thunderstorm', _severeStorm],
  // Drizzle
  ['rain-and-sleet-mix', _drizzle],
  // Clouds
  ['cloudy', _clouds],
  // Atmosphere
  ['fog', _fog],
  ['haze', _haze],
  ['dust', _dust],
  ['haze-day', _atmosphere],
]);

export default weatherCodesMap;
