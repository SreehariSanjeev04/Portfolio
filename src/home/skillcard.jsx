function SkillCard({imageURL, heading, description}) {
    return(
        <div className="skill-card">
            <img src={imageURL} alt="Image"></img>
            <h2>{heading}</h2>
            <p>{description}</p>
        </div>
    );
}
export default SkillCard