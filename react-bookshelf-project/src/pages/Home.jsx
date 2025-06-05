import Shimmer from '../components/Shimmer'
import './Home.css'

function Home() {

    return (
        <>
            <div className='homepage-container'>
                <header className='home-heading-main'>
                    <h2 class="content__container__text">
                        Welcome to my  </h2>

                    <div class="content">

                        <div class="content__container">

                            <ul class="content__container__list">
                                <li class="content__container__list__item">digital playground</li>
                                <li class="content__container__list__item">online canvas</li>
                                <li class="content__container__list__item">creative coding space</li>
                                <li class="content__container__list__item">portfolio website</li>
                                <li class="content__container__list__item">code sandbox</li>
                            </ul>


                        </div>

                    </div>
                    <h2 class="content__container__text">
                        where the ideas in my head come to life in code.
                    </h2>
                </header>
                <section className='home-main-content'>
                    <h3 className='main-content-header'>Software Engineer in Beta</h3>

                    <p className='home-para'>I love to rock climb, and I love to solve problems through code. In both disciplines there is a term called "beta". In rock climbing, the phrase "giving beta" means that you are giving the person climbing tips and tricks from your vantage point on the ground. In software development, a product in beta means it is still in development. I believe both definitions currently apply to me. I am both learning a route where the path isn't always clear, and my skills are a work in progress.</p>

                    <p className='home-para'>Getting beta on a climb can be challenging, because you place a lot of trust in the person that is giving you the advice. As the climber, you are so close to the problem that you can't always see the way forward. To help move my skills in software development forward, I am putting my trust in a nonprofit organization called LaunchCode.  </p>

                    <h4 className='main-content-header'>LaunchCode</h4>
                    <p className='para'>
                        Currently I'm taking a Software Development program through LaunchCode, a non-profit that works to prepare software developers for engineering roles. The course I'm taking is a four month, 40 hour a week course that covers full stack development.
                    </p>
                    <Shimmer>
                        <div className='launchcode-mission'>
                            <i className="fa-solid fa-rocket"></i>
                            <a href="https://www.launchcode.org/about" target='_blank' rel='noopener noreferrer'>Check out LaunchCode's mission here!
                            </a>
                        </div>
                    </Shimmer>
                </section>

                <aside className='home-sidebar-left'>
                    <p className='home-para'>Idk what to put in here yet, but let's just see what it looks like for now!</p>
                </aside>

                <aside className='home-sidebar-right'>
                    <p className='home-para'>Idk what to put in here yet, but let's just see what it looks like for now!</p>
                </aside>

                <footer className="home-footer-section">
                    <p>Some footer info for the home page section.</p>
                </footer>
            </div>
        </>
    )
}

export default Home