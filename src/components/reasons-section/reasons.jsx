import React from 'react'
import '../reasons-section/reason.css'
import nike from '../../assets/nike.png'
import addidas from '../../assets/adidas.png'
import nb from '../../assets/nb.png'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'


const Reasons = () => {
    return (
        <div className="reasons" id="reasons">
            <div className="leftReason">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>

            <div className="rightReason">
                <span className='reasonHeading'>Some Reasons</span>

                <div className='reasonHeading2'>
                    <span className="stroke-text">Why </span>
                    <span>Choose use?</span>
                </div>

                <div className="detailsRight">
                    <div className='subHeadings'>
                        <img src={tick} alt="" />
                        <span>
                            OVER 140+ EXPERT COACHES
                        </span>
                    </div>
                    <div className='subHeadings'>
                        <img src={tick} alt="" />
                        <span>
                            TRAIN SMARTER AND FASTER THAN BEFORE
                        </span>
                    </div>
                    <div className='subHeadings'>
                        <img src={tick} alt="" />
                        <span>
                            1 FREE PROGRAM FOR NEW MEMBER
                        </span>
                    </div>
                    <div className='subHeadings'>
                        <img src={tick} alt="" />
                        <span>
                            RELIABLE PARTNERS
                        </span>
                    </div>
                </div>

                <span style={{ color: "var(--gray)", fontWeight: "normal", }}>Our Partners</span>
                <div className="partners">
                    <img src={nike} alt="" />
                    <img src={addidas} alt="" />
                    <img src={nb} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Reasons;