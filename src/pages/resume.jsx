
const Resume = () => {
    
    return (
        <div className="main-band">
            <div className="exp-band">
               <h2>Work Experience</h2> 
               <div className="work-band">
                  <h3>NCR Voyix</h3>
                  <h4>Web Developer</h4>
                  <h4>July 2016 - present</h4>
                  <ul>
                    <li>Transform design prototypes into websites using HTML, CSS, PHP, jQuery, React.js and JavaScript.</li>
                    <li>Collaborate with a team of project managers and designers to build custom sites.</li>
                    <li>Maintain 150+ websites including on-call production support rotation.</li>
                    <li>Created internal tools using Javascript, Bash, and Python to improve team efficiency.</li>
                    <li>Translate customer specific mockups into financial forms using HTML, CSS, JavaScript, Velocity and jQuery.</li>
                    <li>Developed a Chrome extension that made customer information more accessible, increasing workflow speed by 40%.</li>
                    <li>Developed a Chrome extension increasing asset look up for developers.</li>
                    <li>Leverage accessibility guidelines and responsive best practices to greatly improve user experience.</li>
                    <li>Refactor antiquated tools for a more efficient and robust code base.</li> 

                  </ul>
               </div>
               <div className="work-band">
                   <h3>Peachtree Medical Billing</h3>
                   <h4>Software Developer Co-op</h4>
                   <h4>November 2015 - May 2016</h4>
                   <ul>
                     <li>Designed and developed Chrome extension to make task management more efficient.</li>
                     <li>Wrote and executed unit tests using JasmineJS against the code base.</li>
                   </ul>
               </div>
               <div className="work-band">
                   <h3>Webber-Coleman Woodworks</h3>
                   <h4>Designer/Cabinetmaker</h4>
                   <h4>September 2001 - November 2015</h4>
                   <ul>
                     <li>Managed multiple customer projects to design and build custom cabinetry using Cabinet Vision CAD software.</li>
                     <li>Manufactured cabinets using a Computer Numeric Controlled router using G Code.</li>
                     <li>Supervised the installation of custom cabinets at job sites.</li>
                   </ul>
               </div>
            </div>
            <div className="school-band">
                <h2>Education</h2>
                <div className="degree-band">
                    <h3>University of Georgia</h3>
                    <h4>Bachelor of Computer Science</h4>
                    <h4>May 2016</h4>
                </div>
            </div>
        </div>
    )
}

export default Resume;