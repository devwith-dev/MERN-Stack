const btn = document.getElementById("btn");
const country_container = document.getElementById("country-container");
const map = document.getElementById("map");

// http://api.positionstack.com/v1/forward
//     ? access_key = f4920bed340429f4b8242023cfbff3b2
//     & query = 1600 Pennsylvania Ave NW, Washington DC

//GeoLocation API

const geoLocation = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const long = pos.coords.longitude;
      map.innerHTML = `<iframe src="https://maps.google.com/maps?q=${lat},${long}&z=15&output=embed"
       width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>`;

      getLocation(lat, long);
    });
  }
};

btn.addEventListener("click", geoLocation);

const getLocation = async (lat, long) => {
  try {
    let response = await fetch(
      `http://api.positionstack.com/v1/forward?access_key=f4920bed340429f4b8242023cfbff3b2&query=1600 Pennsylvania Ave NW, Washington DC`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
