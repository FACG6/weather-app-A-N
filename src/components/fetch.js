const check = (response) => {
  if(response.status === 200) {
    return response.json();
  }
  return;
}

const Fetch = (city) => {
  const api = `http://api.apixu.com/v1/forecast.json?key=31792d8000394899b01102841190404&q=${city}&days=7`
  return fetch(api).then(check);
}

export default Fetch;
