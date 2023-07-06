import data from '../../../../data/projects.json';

function Experience() {
    return(
        <div className='Experience'>
            {
                data.information.experience.map((ele) => {
                    return (
                        <div className="card" key={ele.id}>
                            <div className='card-heading'>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase" className="svg-inline--fa fa-briefcase " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"></path></svg>
                                <p className='work-title'>Work</p>
                            </div>
                            <div className='card-description'>
                                <div className='card-img-div'>
                                    <img className="card-img-top" src={ele.logo} alt="Card image cap" />
                                </div>
                                <div className="card-body card-body-experience">
                                    <div className='organisation-details'>
                                        <h5 className="organisation">{ele.organisation}</h5>
                                        <p className="designation">{ele.designation}</p>
                                    </div>
                                    <p className='timeline'>{ele.yoj} - present</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        );
}
export default Experience;