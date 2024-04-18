const AboutCard = ({title, icon, description, projects}) => {
    return (
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                {/* <icon className="green" width={28} height={28} /> */}
                <p className="green">{icon}</p>
            </div>
            <p className="white">{description}</p>
            <span className="gray">{
                new Date(`${projects[0]}`).toLocaleDateString() }-
                {new Date(`${projects[1]}`).toLocaleDateString() }
                </span>
        </div>
    );
}

export default AboutCard;