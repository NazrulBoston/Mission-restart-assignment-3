import GradientText from "../../components/Gradient/GradientText";
import googleImage from '../../assets/googlePlay.png';
import appImage from '../../assets/App.png';
import bannerImage from '../../assets/hero copy.png';



const Banner = () => {
    return (
        <div className="mt-4">
            <div className=" flex flex-col justify-center items-center">

                <div className="text-center">
                    <h1 className="text-5xl font-bold">We Build <br />
                        <GradientText> Productive </GradientText>Apps</h1>
                    <p className="py-6">
                        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                        Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                       <div className="flex justify-center gap-4 mb-4">

                            {/* ✅ Google Play */}
                            <a
                                href="https://play.google.com/store/apps?hl=en_US" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="btn btn-soft flex items-center gap-2">
                                    <img src={googleImage} alt="GooglePlay" />
                                    Google Play
                                </button>
                            </a>

                            {/* ✅ App Store */}
                            <a
                                href="https://www.apple.com/app-store/" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="btn btn-soft flex items-center gap-2">
                                    <img src={appImage} alt="AppStore" />
                                    App Store
                                </button>
                            </a>

                        </div>
                </div>
                <div className="mt-3">
                    <img className="w-[680px]" src={bannerImage} alt="Banner Image" />
                </div>
            </div>
        </div>
    );
};

export default Banner;