import TimeContent from "../components/timeContent";

const About = (props) => {
    const date1 = "2008"
    const info1 = "I had been working as a custom cabinet designer and manufacturer for 7 years. But when the recession hit, I decided that I need to make a career change. I needed something that would not be so closley tied to the housing market. "
    const date2 = "2009"
    const info2 = "After reflecting on being unemployed briefly in 2008,  I decided it was time for a career change. I started this change by enrolling in Microsoft training classes. I enjoyed working with software but by the time I finished the classes I felt I needed something where I could create. I was working again as a cabinetmaker."
    const date3 = "2011"
    const info3 = "Determined to improve my life and continue my journey into the tech community, I enrolled as a student in the computer science department at the University of Georgia."
    const date4 = "2015"
    const info4 = "To make the transition to my new career, I left my job as a cabinetmaker to start an internship at Peachtree Medical Billing."
    const date5 = "2016" 
    const info5 = "I finished my major classes and graduated with a bachelor’s degree in computer science. After graduating I started my first job in the tech industry as a web developer at NCR Inc."
    return (
        <div className="main-band">
            <div className="timeline-outer">
                <div className="timeline">
                        <div className="timeBox timeContainer1">
                            <TimeContent date= {date1} info= {info1}/>
                        </div>
                        <div className="timeBox timeContainer2">
                            <TimeContent date= {date2} info= {info2}/>
                        </div>
                        <div className="timeBox timeContainer3">
                            <TimeContent date= {date3} info= {info3}/>
                        </div>
                        <div className="timeBox timeContainer4">
                            <TimeContent date= {date4} info= {info4}/>
                        </div>
                        <div className="timeBox timeContainer5">
                            <TimeContent date= {date5} info= {info5}/>
                        </div>
                </div>
            </div>
        </div>
        
    )
}

export default About;