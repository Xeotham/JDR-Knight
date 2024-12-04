import { useLoaderData } from "react-router-dom"
import Button from "../../components/Button"
import "./accueil.scss"
import Tools from "../../components/tools"
import Banner from "../../components/banner"
import BigBanner from "../../components/bigBanner"
import bigBannerImg from "../../assets/images/BandeauAccueil.jpg"
import fireImg from "../../assets/images/AccueilImg.jpeg"
import HomeSlider from "../../components/homeSlider"
import { useRef, useEffect, useState } from "react"
import chevron from "../../assets/icons/arrow.png"

export default function Accueil() {
    const { accueilOutils, accueilSlide } = useLoaderData();

    const carouselRef = useRef(null);
    const carouselItemRef = useRef(null);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const itemWidth = carouselItemRef.current.clientWidth;
        let id;

        const startScroll = () => {
            id = setInterval(() => {
                if (carouselRef.current) {
                    carouselRef.current.scrollLeft += itemWidth;
                    if (
                        carouselRef.current.scrollLeft >=
                        -100 + carouselRef.current.scrollWidth - carouselRef.current.clientWidth
                    ) {
                        carouselRef.current.scrollLeft = 0;
                    }
                }
            }, 33000);

            setIntervalId(id);
        };

        const stopScroll = () => {
            if (id) {
                clearInterval(id);
                id = null;
                setIntervalId(null);
            }
        };

        const handleMouseEnter = () => {
            stopScroll();
        };

        const handleMouseLeave = () => {
            if (!id) {
                startScroll();
            }
        };

        if (carouselRef.current) {
            carouselRef.current.addEventListener("mouseenter", handleMouseEnter);
            carouselRef.current.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                stopScroll();
                if (carouselRef.current) {
                    carouselRef.current.removeEventListener("mouseenter", handleMouseEnter);
                    carouselRef.current.removeEventListener("mouseleave", handleMouseLeave);
                }
            };
        }
    }, [carouselRef, carouselItemRef]);

    const handleScroll = (direction) => {
        if (carouselRef.current) {
            const itemWidth = carouselItemRef.current.clientWidth;
            if (intervalId) {
                clearInterval(intervalId);
                setIntervalId(null);
            }
            if (direction === "right") {
                carouselRef.current.scrollLeft += itemWidth;
                if (
                    carouselRef.current.scrollLeft >=
                    -100 + carouselRef.current.scrollWidth - carouselRef.current.clientWidth
                ) {
                    carouselRef.current.scrollLeft = 0;
                }
            } else if (direction === "left") {
                carouselRef.current.scrollLeft -= itemWidth;
                if (carouselRef.current.scrollLeft <= 100) {
                    carouselRef.current.scrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
                }
            }
        }
    };

    return (
        <>
            <BigBanner bigBannerImg={bigBannerImg} bigBannerAlt="Bandeau d'accueil avec coquillage" />
            <section className="introduction">
                <Banner bannerTitle="RA DREAMS VOUS SOUHAITE LA BIENVENUE!" />
                <article className="welcome">
                    <h4 className="welcome__congrat aref">Félicitez-vous... </h4>
                    <p className="welcome__content aref">
                        De vous accorder de l’attention et du temps… Aujourd’hui, c’est à vous et uniquement à vous seul que vous accordez du temps <br /><br />
                        De faire une pause pour prendre soin de vous, lorsque tout nous demande d’aller toujours plus vite dans la vie quotidienne <br /> <br />
                        De prendre du recul, vous tourner vers vous.
                    </p>
                    <h4 className="welcome__congrat aref">Félicitez-vous... </h4>
                    <p className="welcome__content aref">
                        De votre démarche personnelle, de ce voyage intérieur que vous initiez <br /><br />
                        De votre mise en route vers ce que vous désirez et qui est déjà en marche…
                    </p>
                    <h4 className="welcome__congrat aref">Félicitez-vous... </h4>
                    <p className="welcome__content aref">
                        D’ouvrir l’espace qui vous est nécessaire pour accéder à <span className="welcome__content gras aref">Vos clés intérieures</span>, de faire un pas supplémentaire pour (re)prendre le <span className="welcome__content gras aref">pouvoir</span> sur vous-même, vos émotions, <span className="welcome__content gras aref">développer</span> votre <span className="welcome__content gras aref">liberté</span> personnelle et de mettre en œuvre <span className="welcome__content gras aref">Vos solutions</span> <br /><br />
                        De croire en Vous.
                    </p>
                    <p className="welcome__content aref">
                        Pour vous accompagner tout au long de ce voyage, Agnès et Romain vous proposent une <span className="welcome__content gras aref">réponse unique</span> et <span className="welcome__content gras aref">personnalisée</span> à vos besoins :
                    </p>
                    <ul className="welcome__contentList aref" >
                        <li className="aref">Dire stop au stress, à l’anxiété, à l’angoisse, au tabac…</li>
                        <li className="aref">Gérer vos émotions, vos douleurs, votre sommeil, faire face à vos peurs, traumas, phobies…</li>
                        <li className="aref">Accueillir et mieux vivre le changement</li>
                        <li className="aref">Vous préparer, performer, mémoriser ou vous concentrer…</li>
                        <li className="aref">Retrouver le bien-être, le calme et la sérénité</li>
                    </ul>

                    <p className="welcome__content aref">
                        <span className="welcome__content gras aref">Osez</span> et <span className="welcome__content gras aref">Investissez en vous</span>, Coconstruisons ensemble :
                    </p>

                    <p className="welcome__contentCenter aref">
                        Vos besoins – Vos ressources – Vos solutions, ce qui rend notre accompagnement unique, <br />
                        c’est <span className="welcome__content gras aref">Vous</span>


                    </p>

                    <img src={fireImg} alt="énergie intérieur" className="welcome__img" />

                    <p className="welcome__content aref">
                        Vous êtes un particulier (Adulte – Adolescent – Enfant) une entreprise, manager, sportif … <br /> <br />
                        Ra Dreams vous accompagne dans tous vos projets pour vous conduire à la réussite de vos objectifs. <br /> <br />
                        Notre pluridisciplinarité est une réponse unique pour des accompagnements personnalisés en fonction de vos besoins. <br /> <br />
                        Nos interventions sont réalisées sur <span className="welcome__content gras aref">mesure</span> :
                    </p>

                    <ul className="welcome__contentList" >
                        <li className="aref">En séance individuelle, séance de groupe ou ateliers de formation</li>
                        <li className="aref">En ligne, en cabinet, en entreprise ou à domicile</li>
                    </ul>

                    <h3 className="welcome__content aref">DÉFINISSEZ VOTRE OBJECTIF, NOUS SOMMES LÀ POUR VOUS ACCOMPAGNER</h3>
                </article>
                <Button className='toolsCards__button' buttonTitle="Prendre RDV" buttonLink='/contact' />
            </section>

            <section className="toolCards">
                <Banner bannerTitle="NOS PRINCIPAUX OUTILS" />
                <div className="toolCards__container">
                    {accueilOutils.map((tool, index) => (
                        <Tools key={index} tool={tool} />
                    ))}
                </div>
                <Button className='toolsCards__button' buttonTitle="Prendre RDV" buttonLink='/contact' />
            </section>

            <Banner bannerTitle="TÉMOIGNAGES - EXPÉRIENCES" />
            <section className="testimony">
                <div className="testimonyContainer" ref={carouselRef}>
                    <button
                        className="testimonyContainer__buttonLeft"
                        onClick={() => handleScroll("left")}
                    >
                        <img src={chevron} alt="left arrow" />
                    </button>
                    <div className="testimonyContainer__items">
                        {accueilSlide.map((data, i) => (
                            <div className="testimonyContainer__item" key={i} ref={carouselItemRef}>
                                <HomeSlider data={data} />
                            </div>
                        ))}
                    </div>
                    <button
                        className="testimonyContainer__buttonRight"
                        onClick={() => handleScroll("right")}
                    >
                        <img src={chevron} alt="right arrow" />
                    </button>
                </div>
            </section>
        </>
    )
}

export async function loader() {
    const [accueilOutils, accueilSlide] = await Promise.all([
        import("../../data/accueilOutils.json"),
        import("../../data/accueilSlide.json")
    ])

    return {
        accueilOutils: accueilOutils.default,
        accueilSlide: accueilSlide.default
    }
}