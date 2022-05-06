import React from 'react'

const ImageList = (props) => {
    console.log(props.image);
    const images = props.images.map(image => {
        return <div className="ui centered column grid ">
            <img src={image.webformatURL} alt="pic" key={image.id} className='ui row' />
            <p className='columns' ><strong>Image resolution:</strong> {image.imageWidth}x{image.imageHeight} </p>
            <p className='columns' ><strong>Image file Size:</strong> {Math.round((image.imageSize) / 1000000, 0)}MB</p>
            <p className='columns'><strong>views:</strong> {image.views}</p>
            <p className='columns'><strong>Total downloads:</strong> {image.downloads}</p>
            <a className='ui icon blue button' data-content="Add users to your feed" href={image.largeImageURL} target='blank' > <i className='download icon'></i> Download HD Image</a>
            {/* <div className="ui icon button" data-content="Add users to your feed">
                <i className="add icon"></i>
            </div> */}
        </div>
    })
    return (
        <>
            {images}
        </>
    )
}

export default ImageList
