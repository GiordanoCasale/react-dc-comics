const ComicCard = ({ props }) => {
    return (<div className="container-list card-container">
        <div className="prod-card">
            <img src={props.thumb} alt="" />
            <h3>{props.title}</h3>
        </div>
    </div>)
}

export default ComicCard
