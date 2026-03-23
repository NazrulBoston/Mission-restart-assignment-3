import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router";
const AppCard = ({ singleApp }) => {
    const { image, companyName, id, description, ratingAvg, downloads } = singleApp;
    console.log(singleApp);
    return (
        <Link to={`/appDetails/${id}`}>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{companyName}</h2>

                    <p>
                        {description.length > 40
                            ? description.slice(0, 40) + "..."
                            : description}
                    </p>

                    <div className="card-actions justify-between">
                        <button className="btn btn-default text-[#00D390] bg-[#F1F5E8]"><FaDownload />{downloads}</button>
                        <button className="btn btn-default text-[#FF8811] bg-[#FFF0E1]"><FaStar />{ratingAvg}</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;