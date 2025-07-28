import  './Template1.css'
function Template1({data})
{
    return(
        <div className="resume-container">
            <div className="header">
                <h1>{data["personalDetails"].name}</h1>
                <div className='contact'>
                    <span>{data["personalDetails"].email}</span>
                    <span>{data["personalDetails"].linkedIn}</span>
                    <span>{data["personalDetails"].github}</span>
                    <span>{data["personalDetails"].location}</span>
                    <span>{data["personalDetails"].mobile}</span>
                    <span>{data["personalDetails"].website}</span>
                </div>
            </div>

            <div className='block'>
                <h2 className='section-title'>Professional Summary</h2>
                <div>
                    <p>{data["summary"]}</p>
                </div>
            </div>
    <div className='block'>
                <h2 className='section-title'>Skills</h2>
                <div>
                    <p>{data["skills"]}</p>
                    
                </div>
            </div>
            <div className='block'>
                <h2 className='section-title'>Experience</h2>
                {
                    data["experience"].map((item,index)=>{
                        return(
                            <div>
                                <div className='pos'>
                                    <p>{item.position}</p>
                                    <p>{item.duration}</p>
                                </div>
                                <p>{item.company}</p>
                                <p>{item.description}</p>
                            </div>

                        )
                    })
                }
            </div>
        <div className='block'>
                <h2 className='section-title'>Experience</h2>
                {
                    data["education"].map((item,index)=>{
                        return(
                            <div>
                                <div className='pos'>
                                    <p>{item.school}</p>
                                    <p>{item.duration}</p>
                                </div>


                                <p>{item.grade}</p>
                               
                            </div>


                        )
                    })
                }
            </div>
             <div className='block'>
                <h2 className='section-title'>Projects</h2>
                {
                    data["projects"].map((item,index)=>{
                        return(
                            <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.technologies}</p>
                                    <p>{item.description}</p>  
                            </div>


                        )
                    })
                }
            </div>
        </div>
    )
}
export default  Template1
