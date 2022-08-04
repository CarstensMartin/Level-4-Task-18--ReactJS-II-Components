import './App.css';
// import bootstrap styling
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Profile picture
import profilePicture from './images/photo.jpg';

import { FaMobileAlt, FaMailBulk, FaLinkedin, FaGithub, FaMapMarkerAlt, FaUserAlt, FaRegBuilding, FaUserGraduate, FaJava, FaJs, FaHtml5, FaCss3} from "react-icons/fa";

// Profile photo and basic information
const Profile = () =>
    <div class="header-left">
                    <img src={profilePicture} className="headerLogo" alt="Martin Carstens" class="img-thumbnail rounded-circle mb-2"/>
                    <h1 class="display-5">Martin Carstens</h1>
                    <h4 class="lead text-uppercase text-white-50 mb-4">Full Stack Web and Software Engineer
                        Student @ HyperionDev</h4>
    </div>;

// Contact information
const ContactInformation = () =>
    <div>
        <h5 class="text-uppercase bg-white text-dark py-2 rounded-piill">CONTACT INFORMATION</h5>
        <ul class="list-unstyled text-white-50 ml-5 py-2 ">
            <li class="list-item">
                 <a  href="tel:0027724545712"> <FaMobileAlt/>+27 72 4545 712 </a>
            </li>
            <li class="list-item">
               <a href = "mailto: carstensmartin@outlook.com"> <FaMailBulk/> carstensmartin@outlook.com </a>
            </li>
            <li  class="list-item">
                <a href="https://www.linkedin.com/in/carstens-martin/"><FaLinkedin/>    /in/carstens-martin/</a>
            </li>
            <li  class="list-item">
                <a href="https://github.com/CarstensMartin//"><FaGithub/>    /CarstensMartin/</a>
            </li>
            <li class="list-item">
                <FaMapMarkerAlt/>
                Cape Town, South Africa
            </li>
        </ul>
    </div>;

// List of skills
const Skills = () =>
    <div>
    <h5 class="text-uppercase bg-white text-dark py-2">SKILLS AND PROFICIENCIES</h5>
    <ul class="list text-white-50 ml-5 py-2  text-capitalize">
        <li class="list-item"><FaJava/> Java <FaJs/> JavaScript <FaHtml5/> HTML <FaCss3/> CSS, SQL, Full MERN Stack and more</li>
        <li class="list-item">Teamwork, multitasking and attention to detail.</li>
        <li class="list-item">Supply chain,entrepreneurial skills and logical problem solving.</li>
    </ul>
</div>;

// Languages proficient
const Languages = () =>
    <div>
    <h5 class="text-uppercase bg-white text-dark py-2">LANGUAGES</h5>
    <ul class="list text-white-50 ml-5 py-2  text-capitalize">
        <li class="list-item">English</li>
        <li class="list-item">Afrikaans</li>
    </ul>
</div>;

// About me
const About = () =>
<div class="header-right">
    <h4 class="text-uppercase"><FaUserAlt/> Profile</h4>
    <hr/>
    <p>Full-Stack web dev student with logistics and entrepreneurship background. New to the web dev market after I have following my passion for computer programs.</p>
</div>;

// My Work experience
const WorkExperience = () =>
    <div>
        <h4 class="text-uppercase"><FaRegBuilding/> Work Experience</h4>
        <hr/>
        <ul class="list">
             
            <li class="list-item">
                <h5 class="text-uppercase">Import / Export Controller</h5>
                <h6 class="text-uppercase text-black-50">C. Steinweg Bridge (Pty) Ltd / 2021-02-01 to 2021-10-31</h6>
                <hr/>
                <p>BFW (Minerals and Metals Forwarding) covers a large field in the logistics and shipping industry.
                This role contained the responsibilitiesto create a win-win scenario for everyone and be the company's face to clients. 
                Using my excel skills to build multiple models prickled my imagination again about software building and I decided to follow my passion for lean more.</p>
            </li><br />
  
            <li class="list-item">
                <h5 class="text-uppercase">General Manager / Co-owned</h5>
                <h6 class="text-uppercase text-black-50">Party time Event Hiring / 2017-05-01 to 2020-04-30</h6>
                <hr/>
                <p> Startup company in the events industry. Doing mass market event hiring of equipment for weddings, parties, etc. commodity
                 hiring.
                Analysis on stock and calculations. Adding labour, calculating rental costs.
                Make use of brokerage to fill customers needs if we don't have an item.</p>
                            
            </li><br />
       
            <li class="list-item">
                <h5 class="text-uppercase">Over border freight forwarding controller</h5>
                <h6 class="text-uppercase text-black-50">C. Steinweg Bridge (Pty) Ltd / 2016-06-01 to 2017-04-30</h6>
                <hr/>
                <p>The brokerage of cross border loads. Getting loads from various clients,brokering the loads out to transporters, checking that tracking is accurate, 
                resolving problems and doing the required documentation,helping management with Excel reports, etc.</p>
                            
            </li><br />
                      
            <li class="list-item">
                <h5 class="text-uppercase">Fleet Supervisor</h5>
                <h6 class="text-uppercase text-black-50">Manline Freight, Barloworld Transport / 2015-10-01 to 2016-05-31</h6>
                <hr/>
                <p>Running a fleet of about 30 vehicles, team of drivers and allocating loads to them in SA or
                     cross border. Create time frame, allowing for border crossing, what loads to put on
                     which vehicles. Sort out money packs (permits for each travel, including fuel allowance)
                     Worked out where is the best place to refuel and how much fuel is needed. Price on
                     diesel isn't fixed. Searching for best sites. Lower consumption on price per litre used.
                </p>
            </li><br />

            <li class="list-item">
                <h5 class="text-uppercase">Graduate Program</h5>
                <h6 class="text-uppercase text-black-50">Manline Freight, Barloworld Transport / 2015-01-01 to 2015-09-30</h6>
                <hr/>
            </li><br />
        </ul>
    </div>;

// My Education experience
const Education = () =>
    <div>
        <h4 class="text-uppercase"> <FaUserGraduate/> EDUCATIONAL BACKGROUND</h4>
        <hr/>
        <ul class="list">
            <li class="list-item">
                <h5 class="text-uppercase">Higher National Diploma, Computer Software Engineering</h5>
                <h6 class="text-uppercase text-black-50">HyperionDev | 2021</h6>
                <hr/>
                <p>In Partnership with: University of Cape Town | The University of Edinburgh | UNISA Enterprise 
                </p> <p>Full Stack Web & Software Engineer Bootcamp</p>
            </li><br />
            <li class="list-item">
                <h5 class="text-uppercase">Bachelor of Commerce - Management Science</h5>
                <h6 class="text-uppercase text-black-50">Stellenbosch University | 2012 - 2014</h6>
                <hr/>
                <p>Main focus: Logistics, Marketing, Entrepreneurship and ProjectManagement.
                </p>
            </li><br />
        </ul>
    </div>;

// Function to call all the other functions inside
function App() {
  return (
    <div class="bg-light">
     <div class="container p-5">
        <div class="row">
            <div class="col-lg-4 bg-dark text-white text-center py-4">
      
                <Profile/>
                <ContactInformation/>
                <Skills/>
                <Languages/>

            </div>
            <div class="col-lg-8 bg-light text-dark px5">

                <About/>
                <WorkExperience/>
                <Education/>
               
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
