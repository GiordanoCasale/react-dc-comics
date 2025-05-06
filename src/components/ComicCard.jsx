const ComicCard = (props) => {
    return (
        <div className="prod-card">
            <img src={props.src} alt="" />
            <h3>{props.title}</h3>
        </div>
    )
}

export default ComicCard
