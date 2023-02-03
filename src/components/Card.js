
import star from './../images/Star.png'

export default function Card(props) {
    let badgeText 
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location ==="Online") {
        badgeText = "ONELINE"
    }
    return (
        <section>
            <div className='desc ex'>
                {
                    badgeText && 
                    <div className='card-badge'>{badgeText}</div>
                }
                <img src={require(`./../images/${props.item.coverImg.toString()}`)} className="card-img" />
                <div className='details'>
                    <img src={star} className='card-star' />
                    <span>{props.item.stats.rating}</span>
                    <span className='gray'>( {props.item.stats.reviewCount} ) .</span>
                    <span className='gray'>{props.item.location}</span>
                </div>
                <p className='paragraphe'>{props.item.title}</p>
                <p><span className='bold'>From ${props.item.price}</span> / person</p>
            </div>
        </section>
    )
}