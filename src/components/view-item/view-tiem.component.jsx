const ViewItem = () => {
    return(
        <div>
            <span class="m-icon">location_on</span>
            <div>
                <p class="item-title">${name}</p>
                <p class="label-2 item-subtitle">${
                    state || ""
                } ${country}</p>
            </div>
            <a href="#/weather?lat=${lat}&lon=${lon}" className="item-link has-state" aria-label="${name} weather">
            </a>
        </div>
    )
}

export default ViewItem