import "./bigBanner.scss"


export default function BigBanner(props) {
    return (
        <div className='bigBannerContainer'>
            <img src={props.bigBannerImg} alt={props.bigBannerAlt} className="bigBannerContainer__img"/>
        </div>

    )
}