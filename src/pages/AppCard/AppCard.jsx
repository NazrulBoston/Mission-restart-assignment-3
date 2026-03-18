import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
const AppCard = ({ singleApp }) => {
    const{image, companyName, description, ratingAvg, downloads} = singleApp;
    console.log(singleApp);
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{companyName}</h2>
                <p>{description}</p>
                <div className="card-actions justify-between">
                    <button className="btn btn-default"><FaDownload />{downloads}</button>
                    <button className="btn btn-default"><FaStar />{ratingAvg}</button>
                </div>
            </div>
        </div>
    );
};

export default AppCard;