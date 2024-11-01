import PLNICE2023 from "../assets/images/pln-ice.png";
import fadli from "../assets/images/fadli.png";
import fadli2 from "../assets/images/fadli2.png";
import fg from "../assets/images/fg.png";
import gd from "../assets/images/gd.png";
import web from "../assets/images/web.webp";

const HomePage = () => {
  return (
    <div className="homepage pb-10 ">
      <div className="container mx-auto px-4">
        <div className="hero grid  md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32 shadow-sm">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-4">
              Welcome,
              <br />
              
              I'm <span className="font-bold text-green-600">Fadli Sileuw
              </span>
            </h1>
            <p className="text-base/7 mb-9">
              Photografer || Graphic Designer || Web Development
              
            </p>
            <a
              href="#about"
              className="bg-green-600 hover:bg-green-700 transition-all py-2 px-4 text-white shadow rounded-full"
            >
              About Me <i className="ri-eye-line ms-1 "></i>
            </a>
          </div>
          <div className="box">
            <img
              src={fadli}
              alt="Hero Image"
              className="md:w-full w-[400px]  mx-auto md:m-0"
            />
          </div>
        </div>

        <div
          className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-20 pt-32"
          id="about"
        >
          <div className="box md:order-1 order-2">
            <img
              src={fadli2}
              alt="About Imager"
              className="lg:w-[500px] w-[400px] md:m-0 mx-auto"
            />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7 ">
              About Me{" "}
            </h1>
            <p className="text-base/loose text-justify">
            Hello! I'm Muhammad Fadli Fauzi Sileuw, an Informatics Engineering student at Sangga Buana University with a strong interest in web development, graphic design, and photography. To me, these fields are ways to capture and tell stories—whether through code, design, or the lens of a camera. I aim to blend visual and functional elements to create unique and engaging digital experiences.
            </p>
          </div>
        </div>

        <div className="services pt-32" id="services">
          <h1 className="text-center  lg:text-5xl/tight text-3xl font-medium mb-2 ">
            My Skills
          </h1>
          <p className="text-center">
            {" "}
            I have several skills including:
          </p>
          <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-green-600 rounded-lg shadow p-4">
              <i className="ri-number-1 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Web Development
              </h3>
              <p className="text-white text-base/loose mt-4">
              Proficient in technologies like HTML, CSS, and JavaScript to build responsive and engaging websites. My focus is on creating intuitive and functional user experiences.
              </p>
            </div>
            <div className="box bg-green-600 rounded-lg shadow p-4">
              <i className="ri-number-2 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                UI UX Designer
              </h3>
              <p className="text-white text-base/loose mt-4">
              Designing visually appealing and user-friendly interfaces with Figma and Adobe XD. I aim to combine aesthetics with functionality for a seamless user experience.
              </p>
            </div>
            <div className="box bg-green-600 rounded-lg shadow p-4">
              <i className="ri-number-3 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Photography
              </h3>
              <p className="text-white text-base/loose mt-4">
              Capturing moments and visuals with a creative touch through photography. I use photography to add unique visual elements to my digital and design projects.
              </p>
            </div>
          </div>
        </div>

        <div className="Proyek pt-32" id="proyek">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2 ">
            Proyek
          </h1>
          <p className="text-center">
          I have several Projects including:
          </p>
          <div className="proyek-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white shadow">
              <img
                src={PLNICE2023}
                alt="Proyek Image1"
                className="w-full h-[220px] "
              />
              <h3 className="text-xl font-bold  mt-6 mb-2">Top 6 PLN ICE 2023</h3>
              <p className=" text-base/loose">
              a village potential empowerment innovation competition
              </p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img
                src={gd}
                alt="Proyek Image2"
                className="w-full h-[220px]"
              />
              <h3 className="text-xl font-bold  mt-6 mb-2">Graphic Design Projects</h3>
              <p className=" text-base/loose">
              I have worked on more than 100 graphic design projects for social media content and print media.
              </p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img
                src={fg}
                alt="Proyek Image3"
                className="w-full h-[220px]"
              />
              <h3 className="text-xl font-bold  mt-6 mb-2">Photograph Projects</h3>
              <p className=" text-base/loose">
              I have worked on more than 50 photography projects for formal and informal events including weddings.
              </p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img
                src={web}
                alt="Proyek Image4"
                className="w-full h-[220px]"
              />
              <h3 className="text-xl font-bold  mt-6 mb-2">Web Projects</h3>
              <p className=" text-base/loose">
              I have worked on creating websites, both for campus assignments and outside projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
