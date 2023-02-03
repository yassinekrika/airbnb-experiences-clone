import groupImage from './../images/Group.png'

export default function Hero() {
    return (
        <section className='hero'>
            <img className='hero-img' src={groupImage} />
                <div className='desc'>
                    <h1>
                        Online Experiences
                    </h1>
                    <p>
                        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                    </p>
                </div>
        </section>
    )
}