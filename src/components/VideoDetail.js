import React from 'react';

const VideoDetail = ({ video }) => {

    if (!video) {return <div>Loading...</div>;}

    const videoId = video.id.videoId;
    const videoTitle = video.title;
    const url = `https://youtube.com/embed/${videoId}`;
    const publiDate = video.snippet.publishedAt.substring(0, 10);

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" title={videoTitle} src={url} allowFullScreen></iframe>
            </div>
            <div className="details">
                <h4>{video.snippet.title}</h4>
                <span>{`Published on ${publiDate}`}</span>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;