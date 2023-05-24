import React, { useState } from "react";
import { Video } from "@/types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/VideoList.module.scss";
import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/VideoModal";

type VideoListProps = {
  title: string;
  videos: Video[];
};

const VideoList = ({ title, videos }: VideoListProps) => {
  const [displayedVideos, setDisplayedVideos] = useState(videos.slice(0, 8));
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1580,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const openModal = (video: Video) => {
    setSelectedVideo(video);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleOnSeeAll = () => {
    setDisplayedVideos(videos);
    setExpanded(true);
  };

  const renderVideos = () => {
    return displayedVideos.map((video) => {
      return (
        <React.Fragment key={video.createdAt}>
          <div className={styles.cardContainer}>
            <VideoCard video={video} onClick={() => openModal(video)} />
          </div>
        </React.Fragment>
      );
    });
  };

  return (
    <>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{title}</h3>
        {!expanded && (
          <button
            className={styles.seeAllLink}
            onClick={() => handleOnSeeAll()}
          >
            See All
          </button>
        )}
      </div>

      {!expanded ? (
        <Slider {...settings} className={styles.sliderList}>
          {renderVideos()}
        </Slider>
      ) : (
        <div className={styles.gridList}>{renderVideos()}</div>
      )}
      {showModal && <VideoModal video={selectedVideo} onClose={closeModal} />}
    </>
  );
};

export default VideoList;
