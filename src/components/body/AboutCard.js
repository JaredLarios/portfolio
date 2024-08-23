const AboutCard = ({title, icon, description, projects}) => {
    return (
        <div className="card">
            <div className="card-title">
                <h3>{title}</h3>
                {/* <icon className="green" width={28} height={28} /> */}
                <p>{icon}</p>
            </div>
            <p>{description}</p>
            <span className="card-date">{
                new Date(`${projects[0]}`).toLocaleDateString() }-
                {new Date(`${projects[1]}`).toLocaleDateString() }
                </span>
        </div>
    );
}

export default AboutCard;