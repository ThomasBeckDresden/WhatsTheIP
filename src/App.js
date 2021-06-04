import "./styles.css";
import Flag from "./Flag";
import Map from "./Map";
import LocationDetails from "./LocationDetails";
import axios from "axios";
import { useEffect, useState } from "react";
import mockData from "./mock.json";

const {
  REACT_APP_IPIFY_URL,
  REACT_APP_IPIFY_KEY,
  REACT_APP_FLAG_URL
} = process.env;

const ipifyUrl = `${REACT_APP_IPIFY_URL}?apiKey=${REACT_APP_IPIFY_KEY}`;
const flagUrl = REACT_APP_FLAG_URL;

export default function App() {
  const [locationData, setLocationData] = useState();
  //const mockData = JSON.parse(mockData)
  const [isFetching, setIsFetching] = useState(true);
  const [mapIsLoading, setMapIsLoading] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsFetching(true);
        const fetchData = await axios.get(ipifyUrl);
        console.log(fetchData);
        const countryName = fetchData.data.location.country;
        console.log(countryName);
        const flagData = await axios.get(`${flagUrl}/${countryName}`);
        setLocationData({
          locationData: fetchData.data,
          flagData: flagData.data
        });

        setIsFetching(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, []);

  //  // then
  //  axios
  //  .get(url)
  //  .then()
  //  .catch((e) => {console.log(e)})

  //  // async/await
  //  try {
  //    const myData = await axios.get()
  //  } catch (e) {
  //   console.log('something')
  //  }

  console.log(locationData);

  return (
    <div className="card">
      <div>
        {" "}
        {/* Fetch map result here https://geo.ipify.org/api/v1?apiKey=at_pYoTc61f5oaLXHzSjYJfGXSbTBJwP&ipAddress=8.8.8.8 */}
      </div>
      <div className="card-body">
        <h5 className="card-title">Your Location</h5>
        {!isFetching && (
          <>
            <Flag flagData={locationData.flagData} />
            <LocationDetails locationData={locationData.locationData} />
            <div className="">
              <Map locationData={locationData.locationData} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
