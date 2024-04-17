const AboutCard = ({key, title, icon, description, projects}) => {
    return (
        <div key={key} className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                {/* <icon className="green" width={28} height={28} /> */}
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    );
}

export default AboutCard;