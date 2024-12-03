import './Quote.css'
import tnwLogo from "../../imgs/tnw-logo.svg"

const Quote = () => {
    return (

        <>
            <aside className="text-center mt-5 bg-gradient-primary-to-secondary">
                <div className='container px-5'>
                    <div className='row gx-5 justify-content-center'>
                        <div class="w-75 quote_heading text-white mb-4">
                            "An intuitive solution to a common problem that 
                            we all face, wrapped up in a single app!"</div>
                    </div>
                    <img src={tnwLogo} className='tnwLogo_height' alt="TNW LOGO" />
                </div>

            </aside>
        </>

    );
};

export default Quote;
