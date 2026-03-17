import errorImage from '../../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div className='flex justify-center mt-10'>
           <img  src={errorImage} alt="" />
        </div>
    );
};

export default ErrorPage;