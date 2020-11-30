import React from 'react';
import './gallery.css';
import Gallery_Imgbox from "./Gallery_Imgbox"

const Gallery = () => {
    return (
        <div id="gallery">
            <center><h2>Gallery</h2></center>
            <div className="Gallery_cntr">
            <Gallery_Imgbox
            title="weddings & Diners"
            description="Elegant & classy"
            imageURL="https://th.bing.com/th/id/OIP.IXxDtPglOPb3PnmHQYImUgHaLH?pid=Api&rs=1"         
            
            />
            <Gallery_Imgbox
            title="Summer"
            description="Summertime fun"
            imageURL="https://th.bing.com/th/id/OIP.ifA2nctjGIYOUK2wLcBBeQHaE8?pid=Api&rs=1" 
            />

            <Gallery_Imgbox
            title="Night Events"
            description="Concerts, clubbing, TGIF"
            imageURL="https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2017/06/Concert-photography-tips-03.jpg?resize=750%2C501&ssl=1" 
            />

            <Gallery_Imgbox
            title="Indoor Shoots"
            description="photoshoots done in set studio"
            imageURL="https://i.ytimg.com/vi/KYaE6jlBu8o/maxresdefault.jpg" />
            </div>
        </div>
    )
}

export default Gallery
