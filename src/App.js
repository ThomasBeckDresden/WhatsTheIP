import "./styles.css";
import Flag from "./Flag";
import Map from "./Map";
import LocationDetails from "./LocationDetails";
import axios from "axios";
import { useEffect, useState } from "react";
import mockData from "./mock.json";

const { REACT_APP_IPIFY_URL, REACT_APP_IPIFY_KEY, REACT_APP_FLAG_URL } =
  process.env;

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
        const countryName = fetchData.data.location.country;
        const flagData = await axios.get(`${flagUrl}/${countryName}`);
        setLocationData({
          locationData: fetchData.data,
          flagData: flagData.data,
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
    <div className="container-fluid d-flex justify-content-center p-5">
      <div className="card">
        <div>
          {!isFetching && <Map locationData={locationData.locationData} />}
        </div>
        <div className="card-body row">
          {!isFetching && (
            <>
              <div className="row w-50">
                <LocationDetails {...locationData} />
              </div>

              <div className="row w-50">
                <Flag {...locationData} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
