import "./slider.scss"

export default function Slider({data}){
    return(
        <>
            <article className="slider">
                <div className="slider__container">
                    <img className="slider__container__picture" src={data.picture} alt={data.alt} />
                    <h2 className="slider__container__title">{data.titleslide}</h2>
                </div>
            </article>
        </>
    )
}