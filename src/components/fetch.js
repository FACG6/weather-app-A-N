const Fetch = (city) => {

  const api = `http://api.apixu.com/v1/forecast.json?key=31792d8000394899b01102841190404&q=${city}&days=7`
  return fetch(api).then(res => res.json()).catch(err => console.log(err));
}

export default Fetch;