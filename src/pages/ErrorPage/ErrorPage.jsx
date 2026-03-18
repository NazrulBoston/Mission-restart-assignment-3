import { Link } from 'react-router';
import errorImage from '../../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center mt-10'>
                <img src={errorImage} alt="" />
            </div>

            <div className='flex flex-col text-center space-y-3 items-center'>
                <h1 className='text-2xl'>Oops, page not found!</h1>
                <p className='text-sm'>
                    The page you are looking for is not available.
                </p>

                <Link
                    to="/"
                    className="btn w-fit inline-flex items-center gap-2 rounded-xl text-white 
                    bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-none px-4 py-2"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;