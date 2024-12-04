import "./workCard.scss"

export default function WorkCard({ data }) {
    return (
        <>
            <article className="workCard">
                <div className="workCard__pictures">
                    <img className="workCard__pictures__selfie" src={data.selfie} alt={data.alt} />
                    <div className="workCard__pictures__container">
                        <img className="workCard__pictures__container__logo" src={data.logo} alt={data.altLogo} />
                        <a href="https://www.linkedin.com/in/romain-albrecht/" target="_blank"><img className="workCard__pictures__container__linkedin" src={data.linkedin} alt={data.altLogo2} /></a>
                    </div>
                </div>
                <div className="workCard__description">
                    <div className="workCard__description__title">
                        <h3 className=" gras aref">{data.id} </h3>
                        <h4 className="gras aref">{data.title}</h4>
                    </div>
                    <p className="aref">{data.content}</p>
                    <p className="aref"><span className="gras aref">Domaines d'expertises :</span> {data.domains}</p>
                </div>
            </article>

        </>
    )
}