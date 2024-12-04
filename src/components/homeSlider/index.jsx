import "./homeSlider.scss"

export default function HomeSlider({ data }) {
    return (
        <>
            <div className="homeSliderContainer" style={{ backgroundColor: data.backgroundColor }}>
                <article className="homeSlider">
                    <img
                        className="homeSlider__img"
                        src={data.profilPicture}
                        alt={data.altTxt}
                    />
                    <h3 className="homeSlider__title aref">{data.name}</h3>
                    <h4 className="homeSlider__subtitle aref">{data.occupation}</h4>
                    <h4 className="homeSlider__subtitle aref">{data.assistance}</h4>
                    <p className="homeSlider__content aref">{data.opinion}</p>
                </article>
            </div>
        </>
    )
}
