import React from 'react';

const Gallery_Imgbox = ({title, imageURL, description}) => {
    return (
        <div className="Gallery_box"
                style={{
                    position: "relative",
                    minWidth:"150px",
                    maxWidth:"300px",
                    width:"100%",
                    height:"100%",
                    minHeight:"150px",
                    maxHeight: "300px",
                    background: "transparent",
                    margin: "10px",
                    boxSizing: "border-box",
                    display: "inline-block"
                }}
>
            <div className="imgBox"
            style={{position: "relative", overflow: "hidden"}}
            >
                {/* "https://i.ytimg.com/vi/kgV27HcbgRg/maxresdefault.jpg" */}
                <img src={imageURL} alt="" 
                style={{ minWidth: "299px",maxWidth:"300px",width: "100%", transition: "transform 2s", overflow:"hidden" ,height: "100%", minHeight: "299px",maxHeight:"300px"}}/>
            </div>
            <div className="details">
                <div className="details_content">
            <h2>{title}</h2>
            <p>{description}</p>
                </div>
                
            </div>
            </div>
    )
} 

export default Gallery_Imgbox
