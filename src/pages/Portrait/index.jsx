import BigBanner from "../../components/bigBanner";
import "./portrait.scss"
import portraitImg from "../../assets/images/Bandeau notre histoire.jpg";
import BannerRotated from "../../components/bannerRotated";
import { Link, useLoaderData } from "react-router-dom";
import WorkCard from "../../components/workCard";
import WorkCardReversed from "../../components/workCardReversed";
import BannerPicture from "../../components/bannerPicture";
import bannerImg from "../../assets/images/bandeauPortrait.jpeg";
import Button from "../../components/Button";
export default function Portrait() {
    const workData = useLoaderData()
    return (
        <>
            <BigBanner bigBannerImg={portraitImg} bigBannerAlt='Stylo plume posé sur une lettre écrite à la main' />
            <section className="presentation">
                <BannerRotated bannerRotatedTitle="VOS PRATICIENS" />
                <div className="presentation__praticiens">
                    <WorkCard data={workData[0]} />
                    <WorkCardReversed data={workData[1]} />
                    <Button buttonTitle="Prendre RDV" buttonLink='/contact' />
                    <p className="presentation__praticiens__content aref">
                        Dès la plus tendre enfance, nous avons tous entendu au moins une fois, avec les meilleurs intentions qui soient : <br /><br />

                        « Ce n’est pas possible », « C’est dangereux », « Ce n’est pas pour toi », « Je n’aimerais pas être à ta place », « tu n’as pas peur ? », « C’est n’importe quoi », « C’est dur », « C’est difficile », « Tu n’as pas de chance », « Reste à ta place », « Arrête de rêver », « C’est risqué », « Moi, je ne le ferai pas à ta place » … <br /><br />

                        Mais personne n’est à notre place, personne ne vit ce que nous vivons… C’est uniquement nous qui faisons face et/ou créons les évènements de notre vie… qui vivons tout simplement.<br /><br />

                        <span className="gras aref">C’est notre manière d’appréhender la Vie qui en fait sa richesse, c’est notre interaction avec elle qui la façonne.</span><br /><br />

                        Chacun sait que la Vie réserve son lot d’inattendus aussi joyeux que terribles parfois. Comme vous, nous avons vécu ces situations.<br /><br />

                        Pour l’un, un acte de foi en prenant son baluchon sur son épaule et s’installer sur un atoll d’à peine 800 habitants, pour l’autre un veuvage survenu bien trop tôt. Pour les deux, des vies à bâtir qui s’effondrent tout à coup pour mieux les reconstruire, tomber et se relever encore et encore…<br /><br />

                        Comme vous, les peurs et incertitudes ont croisé notre chemin.<br /><br />

                        Nous avons chacun de notre côté expérimenté l’impermanence de toute chose, et c’est avec nos ressources internes – que nous avons fait émerger petit à petit – que nous sublimons nos évènements de vie.<br /><br />

                        Certes, cela nous a demandé <span className="gras aref">rigueur, discipline et engagement</span>. Mais <span className=" gras aref">les résultats sont</span> bien <span className="  gras aref">là, tangibles</span>. Nous nous sommes <span className="  gras aref">trouvés</span>, avons <span className="  gras aref">reconstruit</span> nos familles pour n’en faire qu’une, <span className="  gras aref">osé</span> nous reconvertir professionnellement, <span className="  gras aref">dire stop</span> à la cigarette, faire des choix, <span className="  gras aref">osé</span> le changement, <span className="  gras aref">osé</span> nos rêves… <span className="  gras aref">Osé</span> être qui nous sommes !<br /><br />

                        Et aujourd’hui, <span className="gras aref">forts</span> de toutes nos expérimentations, nous sommes <span className=" presentation__praticiens__content gras aref">heureux d’accompagner</span> les personnes sur <span className="  gras aref">leur propre voie, toutes</span> les <span className="  gras aref">personnes</span> pour lesquelles <span className="  gras aref">évoluer, grandir, s’engager</span> … est <span className="  gras aref">fondamental</span>.<br /><br />

                        Nous avons investi en nous <span className="gras aref">et vous ? Êtes vous prêt à investir en vous ?</span>
                    </p>
                    <Button buttonTitle="Prendre RDV" buttonLink='/contact' />
                </div>
            </section>
            <section className="approche">
                <BannerPicture bannerPicture={bannerImg} bannerPictureTitle="NOTRE APPROCHE" />
                <p className="approche__texte aref">
                    Elle est avant tout <span className="gras aref">holistique</span>. Pour nous, l’Humain, dans sa globalité, est <span className="gras aref">au centre de notre pratique</span>. <br />
                    Sans cesse, nous testons, éprouvons et perfectionnons nos pratiques au point de transformer notre vie quotidienne en « laboratoire d’expérimentation » grandeur nature. Par ce biais, auquel s’ajoute une perpétuelle formation continue, vous bénéficiez de toutes nos avancées. <br />
                    Dans <span className="gras aref">notre approche, vous êtes acteur investi, engagé, responsable et autonome</span> de votre accompagnement; c’est alors que la <span className="gras aref">Transformation</span> recherchée peut <span className="gras aref">s’opérer</span>. <br />
                    Dans les règles de l’art, de <Link to="/deontologie"><span className="gras aref approche__texte__link">l’éthique</span></Link> et de la <Link to="/deontologie"><span className="gras aref approche__texte__link">déontologie</span></Link>, vous êtes accueilli avec <span className="gras aref">respect, bienveillance</span>, sans jugement, en prenant en compte votre <span className="gras aref">individualité, capacité et limites</span> y compris dans votre <span className="gras aref">fragilité</span>.
                </p>
                <Button buttonTitle="Prendre RDV" buttonLink='/contact' />
            </section>
        </>
    )
}

export async function loader() {
    return (await import("../../data/descriptionPortrait.json")).default // chargement au moment ou on l'appel
}
