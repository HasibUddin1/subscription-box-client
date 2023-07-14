import './Main.css'

const Main = () => {
    return (
        <div className="background-image-banner h-screen bg-slate-800 bg-blend-overlay text-white">
            <div className='flex justify-center gap-10 items-center h-screen'>
                <button className='text-2xl border-2 p-5 hover:bg-slate-200 ease-in-out duration-200 hover:text-black'>Are you a smoker?</button>
                <button className='text-2xl border-2 p-5 hover:bg-slate-200 ease-in-out duration-200 hover:text-black'>Are you a quitter?</button>
            </div>
        </div>
    );
};

export default Main;