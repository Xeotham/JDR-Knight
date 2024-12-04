import "./bannerPicture.scss"


export default function BannerPicture(props) {
    return (
        <div className="bannerPicture" 
        style={{ backgroundImage: `url(${props.bannerPicture})` }}>

            <div className="bannerPicture__container">
                <h2 className="bannerPicture__container__title prestage">{props.bannerPictureTitle}</h2>
            </div>
        </div>
    )
}