import "./About.scss";
import { Link} from "react-router-dom";

export default function About() {
    return (
        <div>
            
          
            <section id="section-about" className="bg-grey">
                <div className="about-container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6  about-img" >
                            <img src="https://media3.giphy.com/media/LSulGJTxAWxsgkLy4X/giphy.gif?cid=ecf05e47a5ctq3kmadf2pzr51blorjxtxlawaqnb4usaxf4z&rid=giphy.gif&ct=g" alt="about" className="img-responsive" />
                        </div>
                        <div className="col-md-8 col-sm-8">
                            <div className="about-box">
                                <h1 className="box-title">About Us</h1>
                                <span>We are Compact</span>
                                <div className="tiny-border"></div>
                                <p>Although it probably seems obvious that music can evoke emotions, it is to this day not clear why. Why doesn’t music feel like listening to speech sounds, or animal calls, or garbage disposals? Why is music nice to listen to? Why does music get blessed with a multi-billion dollar industry, whereas there is no market for “easy listening” speech sounds?</p>
                                <ul className="list-style-1">
                                    <li>Listening to uplifting music may make you happier—and possibly more generous</li>
                                    <li>Songs with “prosocial” lyrics may make you more helpful and empathic.</li>
                                    <li> Listening to prosocial songs may change how you spend your money</li>
                                    <li>Making and moving to music may boost cooperation and connection</li>
                                </ul>
                                <div className="divider-single"></div>
                                <Link href="/signup" className="btn btn-primary btn-small">Get Started</Link>                                
                            </div>
                        </div>
                    </div>
                </div>        
            </section>
            <section id="sec" ClassName= "test">
                <h2>TEST</h2>
                <ul>
                    <li>
                    <span className="fa fa-code"></span>

                    <h3>Music</h3>
                    <p>Music is an art form whose medium is sound and silence. Generally, a song is considered the smallest standalone work of music, especially when involving singing. </p>
                    </li>
                    <li><span className="fa fa-music"></span>
                    <h3>Music</h3>
                    {/* <p>Music is an art form whose medium is sound and silence. Generally, a song is considered the smallest standalone work of music, especially when involving singing. </p> */}
                    {/* <p>The common elements of music are pitch (which governs melody and harmony), rhythm (and its associated concepts tempo, meter, and articulation), dynamics, and the sonic qualities of timbre and texture.</p> */}
                    </li>
                    <li><span className="fa fa-users"></span>
                    <h3>Music</h3>
                    <p>Music is an art form whose medium is sound and silence. Generally, a song is considered the smallest standalone work of music, especially when involving singing. </p>
                    {/* <p>The common elements of music are pitch (which governs melody and harmony), rhythm (and its associated concepts tempo, meter, and articulation), dynamics, and the sonic qualities of timbre and texture. The word derives from Greek μουσική (mousike; "art of the Muses").</p> */}
                    </li>

                </ul>
            </section>
        </div>
    )
}
