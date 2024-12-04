import Banner from "../../components/banner"
import "./mentionsLegales.scss"

export default function MentionsLegales() {
    return (
        <>
            <Banner bannerTitle="MENTIONS LÉGALES" />
            <section className="mentionsContainer">
                <h3 className="mentionsContainer__title prestage">1. Site</h3>
                <p className="mentionsContainer__content aref">
                    RA Dreams : https://radreams.com
                </p>
                <h3 className="mentionsContainer__title prestage">2. Éditeur</h3>
                <p className="mentionsContainer__content aref">
                    RAdreams Sas, immatriculée sous le numéro 909 675 779 RCS Angoulême, dont le siège social est situé à : les buis 16410 TORSAC
                    Adresse électronique : contact@radreams.com <br />
                    Représentée par Romain ALBRECHT, Agnès MICHAUD.
                </p>
                <h3 className="mentionsContainer__title prestage">3. Hébergeur</h3>
                <p className="mentionsContainer__content aref">
                    Ce site est hébergé par PlanetHoster, dont le siège social est situé 4416 Louis-B.-Mayer Laval Québec Canada H7P 0G1.
                </p>
            </section>

        </>
    )
}