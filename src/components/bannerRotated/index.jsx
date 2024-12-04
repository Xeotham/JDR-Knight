import "./bannerRotated.scss"


export default function BannerRotated(props) {
    return (
        <div className="bannerRotated">
            <div className="bannerRotated__container">
                <h2 className="bannerRotated__container__title prestage">{props.bannerRotatedTitle}</h2>
            </div>
        </div>
    )
}