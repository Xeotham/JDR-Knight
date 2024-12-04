import "./map.scss"

const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;

export default function Map() {
    return (
        <div className="container">
            <iframe
                className="container__map"
                src={`https://www.google.com/maps/embed/v1/place?q=Torsac%2C+16410&key=${apiKey}`}
                allowFullScreen
            ></iframe>
        </div>
    );
}