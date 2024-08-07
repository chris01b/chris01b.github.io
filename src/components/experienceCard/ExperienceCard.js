import React, {useState, createRef} from "react";
import Vimeo from '@u-wave/react-vimeo';
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  const handleCardClick = () => {
    if (cardInfo.link) {
      window.open(cardInfo.link, '_blank');
    } else if (cardInfo.vimeoLink) {
      setIsExpanded(prev => !prev);
    }
  };

  return (
    <div
      className={`${isDark ? "experience-card-dark" : "experience-card"} ${isExpanded ? "card-expanded" : "card-collapsed"}`}
      onClick={handleCardClick}
      style={{ cursor: cardInfo.vimeoLink || cardInfo.link ? "pointer" : "default" }}
    >
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
      {cardInfo?.vimeoLink && <Vimeo
        video={cardInfo.vimeoLink}
        className={`vimeo-player ${isExpanded && playerReady ? 'show' : 'hide'}`}
        volume={0.01} // avoids showing obstructive unmute button
        autoplay={isExpanded && playerReady}
        paused={!isExpanded}
        dnt
        responsive
        onReady={() => setPlayerReady(true)}
        onError={() => setPlayerReady(false)}
      />}
    </div>
  );
}
