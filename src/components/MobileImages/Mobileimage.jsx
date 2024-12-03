import mobileHero from "../../imgs/MobileHeroSection.PNG"
// ../../imgs/MobileHeroSection.png path means:
// .. (one level up) from the Herosection folder to the components folder,
// another .. (one more level up) to the src folder, where the imgs folder is located.

const Mobileimgs = () => {
    return(
        <>
        <img src={mobileHero} alt="Mobile phone image" />
        </>
    );
};

export default Mobileimgs;
