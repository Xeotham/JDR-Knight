import { useLoaderData } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import "./applicationsEtOutils.scss"
import Slider from "../../components/slider"
import Button from "../../components/Button"
import Questions from "../../components/questions"
import BannerPicture from "../../components/bannerPicture"
import bannerImg from "../../assets/images/transitionImagePotterie.jpeg"

export default function ApplicationsEtOutils() {
    const { slideData, questionaryData } = useLoaderData()
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
        }, 5000);
    
        return () => clearInterval(interval);
      });

    const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === slideData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slideData.length - 1 : prevIndex - 1
        );
    };
    return (
        <>
            {slideData.map((data, index) => (
                <section key={index} className={`carousel-slide ${
                    index === currentIndex ? 'active' : ''
                  }`}>
                <img className="before" src="src/assets/icons/chevronAccueil.png" onClick={prevSlide}/>
                    <Slider data={data}/>
                <img className="after" src="src/assets/icons/chevronAccueil.png" onClick={nextSlide}/>
                </section>
            ))}
            <section className="application">
                <p className="application__text">Domaines d’application des thérapies brèves, hypnose, coaching, sophrologie, pour votre développement et épanouissement personnel et/ou professionnel, améliorer votre quotidien<br></br><br></br>
                    <h3 className="gras aref">Performance</h3>
                    <ul>
                        <li>Développer son potentiel, Mémorisation, Booster ses capacités, Concentration, Préparation mentale…</li>
                    </ul>
                    <br></br><h3 className="gras aref">Peurs et Phobies</h3>
                    <ul>
                        <li>Dentiste, Aiguilles, Soin,</li>
                        <li>Phobie Sociale, Scolaire,</li>
                        <li>Animaux, Avion, Eau…</li>
                    </ul>
                    <br></br><h3 className="gras aref">Préparer un évènement</h3>
                    <ul>
                        <li>Entretien professionnel, Examen, Concours, Expatriation, Reconversion professionnelle, Compétitions sportives, Accouchement…</li>
                    </ul>
                    <br></br><h3 className="gras aref">Traumatismes</h3>
                    <ul>
                        <li>Détresse, Réaction physique / psychologique, Abandon, Séparation, Deuil, Chocs,</li>
                        <li>Souvenirs répétitifs…</li>
                    </ul>
                    <br></br><h3 className="gras aref">Sommeil</h3>
                    <ul>
                        <li>Qualité du sommeil, Endormissement, Terreurs nocturnes, Cauchemars,</li>
                        <li>Insomnies, Réveils nocturnes</li>
                        <li>Gestion du stress</li>
                        <li>Anxiété, Crise d’angoisse, de panique, Nervosité, Mal-être, Déprime,</li>
                        <li>Burn-out, Bore-out…</li>
                    </ul>
                    <br></br><h3 className="gras aref">Addictions – Sevrage</h3>
                    <ul>
                        <li>Tabac, Alcool, Argent, Jeux,</li>
                        <li>Ecrans, Troubles Sexuels,</li>
                        <li>Dépendance Affective…</li>
                    </ul>
                    <br></br><h3 className="gras aref">Bien-Être et Émotions</h3>
                    <ul>
                        <li>Lâcher-Prise, Confiance en soi,</li>
                        <li>Gestion des émotions,</li>
                        <li>Estime de soi…</li>
                    </ul>
                    <br></br><h3 className="gras aref">Douleurs</h3>
                    <ul>
                        <li>Musculaires, Traumatiques, Sciatique, Chroniques, Aiguës, Inflammatoires,</li>
                        <li>Soins douloureux, Arthrose…</li>
                    </ul>
                    <Button className='toolsCards__button' buttonTitle="Prendre RDV" buttonLink='/contact' />
                </p>
            </section>
            <section className="toolsSection">
                <BannerPicture bannerPicture={bannerImg} bannerPictureTitle='NOS OUTILS' />
            </section>
            <section className="toolsDescription">
                <p className="toolsDescription__text">
                    <h3 className="gras aref underline">Nos outils, les thérapies brèves : Hypnose, Coaching, Sophrologie</h3>
                    <br></br>
                    Les thérapies brèves, <span className="gras aref">Hypnose, Coaching ou bien Sophrologie</span> notamment sont utilisées pour :
                    <ul>
                        <li>Résoudre une problématique,</li>
                        <li>Accéder à ses ressources et solutions internes,</li>
                        <li>Opérer ou vivre un changement,</li>
                        <li>En finir avec des comportements ou situations difficiles.</li>
                    </ul>
                    <br></br>
                    Ces thérapies brèves sont d’excellents outils permettant d’atteindre vos objectifs, quels qu’ils soient de façon douce, naturelle, efficace et durable et dans la quasi-totalité des domaines de vie.
                    <br></br>
                    <br></br>
                    <h3 className="gras aref">Hypnose, coaching ou bien sophrologie, chaque séance est unique et créée sur mesure.</h3>
                    <br></br>
                    Les techniques sont différentes, mais vous y retrouvez toujours :
                    <br></br>
                    <ul>
                        <li>Un temps d’écoute</li>
                        <li>La définition de votre objectif d’accompagnement</li>
                        <li>Une ou des pratiques spécifiques</li>
                        <li>Un retour d’expérimentation</li>
                        <li>Bienveillance</li>
                        <li>Construction</li>
                    </ul>
                    <br></br>
                    <h3 className="gras aref underline">Pré-requis</h3>
                    Votre engagement et implication sont les facteurs clés de votre réussite.
                    <br></br>
                    <h3 className="gras aref underline">A qui sont-elles destinées ?</h3>
                    De manière générale, elles sont destinées à toutes et tous.
                    <br></br>
                    <br></br>
                    <p className="toolsDescription__text__warning">
                        <h3 className="gras aref underline">Cas particuliers :</h3>
                        <span className=" aref underline">Attention cependant</span> : l’accompagnement en hypnose ou sophrologie ne se substitue en aucun cas à un traitement et/ou suivi médical. Aucun diagnostic n’est réalisé. Dans le cadre d’une pathologie, votre praticien intervient uniquement et seulement en complémentarité du suivi médical.
                        Votre praticien se réserve le droit, à tout moment, de ne pas réaliser l’accompagnement.<br></br><br></br>
                        <span className="aref underline">Contre-indications formelles à l’hypnose ou sophrologie :</span> sujets psychotiques en phase aiguë, non stabilisés par une médication, schizophrènes, paranoïaques, sujets atteints de troubles maniaco-dépressifs ou troubles bipolaires, certaines personnalités borderline.
                    </p>
                    <br></br>
                    <h3 className="aref gras underline">Durée</h3>
                    45 mins/ 1 heure en moyenne, voire 1h30 pour la première séance.
                    <br></br>
                    <br></br>
                    <h3 className="gras aref underline">Une tenue spéciale ou du matériel ?</h3>
                    Non, ni tenue spéciale, ni matériel. Privilégier une tenue confortable et décontractée.
                </p>
                <Button className='toolsCards__button' buttonTitle="Prendre RDV" buttonLink='/contact' />
            </section>
            <section className="questionarySection">
                {questionaryData.map((data, index3) => (
                    <section key={index3}>
                        <Questions data={data} />
                    </section>
                ))}
                <Button buttonTitle="Prendre RDV" buttonLink='/contact' />
            </section>

        </>
    )
}

export async function loader() {
    const [slideData, questionaryData] = await Promise.all([
        import("../../data/slide.json"),
        import("../../data/questionary.json")
    ])

    return {
        slideData: slideData.default,
        questionaryData: questionaryData.default
    }
}