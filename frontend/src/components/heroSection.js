import "../styles/chanudi/heroSection.css";

export function HeroSection() {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" styles="margin-top:100px">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/beheth-kade-6ds3w9c.appspot.com/o/asserts%2F12abe94c-ecad-42a0-831b-2e1c60f23d42.__CR0%2C0%2C970%2C300_PT0_SX970_V1___.jpg?alt=media&token=e35f938d-8a8c-4e4b-8f33-3efe6d22d8b9" alt="First slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Second slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Third slide" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only"></span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only"></span>
            </a>
        </div>
    );
}

export default HeroSection;
