import ViewItem from "../view-item/view-tiem.component"

const ViewList = () => {
    return (
        <ul class="view-list" data-search-list>
            {this.map(e => (
                <ViewItem data={e}/>
            ))}
        </ul>
    )
}

export default ViewList