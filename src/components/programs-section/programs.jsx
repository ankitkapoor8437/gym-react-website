import React from 'react'
import '../programs-section/programs.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'


const Programs = () => {
    return (
        <div className="programs" id="programs">
            {/* header */}
            <div className="programs-header">
                <span className="stroke-text">Explore our</span>
                <span>Programs</span>
                <span className="stroke-text">to shape you.</span>
            </div>

            {/* programs categories */}
            <div className="program-categories">
                {programsData.map((value) => (
                    <div className="category">
                        {value.image}
                        <span>{value.heading}</span>
                        <span>{value.details}</span>
                        <div className="join-now">Join Now<img src={RightArrow} alt=""/></div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Programs;