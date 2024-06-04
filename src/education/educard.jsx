
function EduCard({imageURL,title,year,description}) {
    return (
        <div className="edu-card">
        <img src={imageURL}></img>
            <div className="edu-card-details">
                <h2>{title}</h2>
                <h3>{year}</h3>
                <p>{description}</p>
            </div>
    </div>
    );
}
export default EduCard