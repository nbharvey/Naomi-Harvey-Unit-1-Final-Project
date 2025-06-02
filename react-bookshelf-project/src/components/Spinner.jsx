import './Spinner.css'

function Spinner() {
    // spinner made with loading.io
    return (
        <>
            <div className='spinner-img'>
                <img src="/eclipse-spinner.svg" />
                <div className='spinner-text'>
                    <p>Thanks for waiting! You're awesome...</p>
                </div>
            </div>
        </>
    );
}

export default Spinner