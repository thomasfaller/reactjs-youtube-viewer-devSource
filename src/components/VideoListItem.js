import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title.length > 50 ? video.snippet.title.substring(0,50) + "..." : video.snippet.title;
    const videoExcerpt = video.snippet.description.substring(0,50) + "...";

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left mr-2">
                    <img className="media-object" src={imageUrl} alt={videoTitle}/>
                </div>
                <div className="media-body ml-2">
                    <div className="media-heading">
                        <h6>{videoTitle}</h6>
                        <p>{videoExcerpt}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;

