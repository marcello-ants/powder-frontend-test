import { useState } from "react";
import { Video } from "@/types";
import Link from "next/link";
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
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null); // Explicitly define the type

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
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

  return (
    <div>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{title}</h3>
        <Link href="/videos" className={styles.seeAllLink}>
          See all
        </Link>
      </div>
      <Slider {...settings} className={styles.VideoList}>
        {videos.map((video) => (
          <div key={video.createdAt}>
            <VideoCard video={video} onClick={() => openModal(video)} />
          </div>
        ))}
      </Slider>
      {showModal && <VideoModal video={selectedVideo} onClose={closeModal} />}
    </div>
  );
};

export default VideoList;
