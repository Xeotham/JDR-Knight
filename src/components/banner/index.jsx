import "./banner.scss"


export default function Banner(props) {
    return (
        <div className="banner">
            <div className="banner__container">
                <h2 className="banner__container__title prestage">{props.bannerTitle}</h2>
            </div>
        </div>
    )
}