import { useState } from "react";
import "./questions.scss";
import arrow from '../../assets/icons/arrow.png';

export default function Questions({ data }) {
    const [expandedIndex, setExpandedIndex] = useState();

    const handleClick = (index) => {
        if (index === expandedIndex) {
            setExpandedIndex();
        } else {
            setExpandedIndex(index);
        }
    }

    return (
        <article className="questionary">
            <h2 className="questionary__title aref" id={data.id}>{data.id}</h2>
            {data.questions.map((question, index0) => (
                <div className="questionary__question" key={index0}>
                    <div className="questionary__question__title">
                        <h3 className="aref">{question.title}</h3>
                        <img
                            src={arrow}
                            alt="Icone flèche"
                            className={`questionary__question__title__img ${expandedIndex === index0 ? "rotateArrow" : ""}`}
                            onClick={() => handleClick(index0)}
                        />
                    </div>
                    <div>
                        {question.content.map((item, index1) => (
                            <p key={index1} className={`aref questionary__question__content ${expandedIndex === index0 ? "showContent" : ""}`}>
                                {item} <br /><br />
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </article>
    );
}
