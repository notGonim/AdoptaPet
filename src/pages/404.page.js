import error from '../assets/error.svg'
export default function NotFound() {

    return (
        <div className="conainer    flex justify-center items-center ">
            <img src={error} alt="404" className="w-6/12 mt-12" />
        </div>
    )
}