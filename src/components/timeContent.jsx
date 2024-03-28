const TimeContent = (props) => {

    return (
        <>
            <div className="timeContent">
                    <h2 className="timeTitle">{props.date}</h2>
                    <p>{props.info}</p>
            </div>
            
        </>
        
    )
}

export default TimeContent;