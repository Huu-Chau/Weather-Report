const MetaItem = ({iconName, display}) => {
    return(
        <li className="meta-item">
            <span className="m-icon">{iconName}</span>
            <p className="title-3 meta-text">{display}</p>
      </li>
    )
}

export default MetaItem