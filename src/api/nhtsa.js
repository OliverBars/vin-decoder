const BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles';

export async function decodeVin(vin) {
  const response = await fetch(`${BASE_URL}/decodevin/${vin}?format=json`);
  if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

  const data = await response.json();

  const errorCode = data.Results.find((item) => item.VariableId === 143);
  const errorText = data.Results.find((item) => item.VariableId === 191);
  const hasError = errorCode && !['0', '1'].includes(errorCode.Value);

  const serviceIds = [142, 143, 144, 156, 191, 196];
  const results = data.Results.filter(
    (item) =>
      item.Value !== null &&
      item.Value !== '' &&
      !serviceIds.includes(item.VariableId)
  );

  return {
    message: data.Message,
    errorText: hasError ? errorText?.Value : null,
    results,
  };
}

export async function getVariableList() {
  const response = await fetch(`${BASE_URL}/getvehiclevariablelist?format=json`);
  if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
  const data = await response.json();
  return data.Results;
}

export async function getVariableById(id) {
  const response = await fetch(`${BASE_URL}/getvehiclevariablevalueslist/${id}?format=json`);
  if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
  const data = await response.json();
  return data.Results;
}
