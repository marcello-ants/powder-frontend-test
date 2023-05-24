import { Video } from "@/types";
import styles from "@/styles/VideoCard.module.scss";
import formatDate from "@/utils/formatDate";

interface VideoCardProps {
  video: Video;
  onClick: () => void;
}

const VideoCard = ({ video, onClick }: VideoCardProps) => {
  const { category, image, createdAt } = video;

  const backgroundStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className={styles["video-card"]} onClick={onClick}>
      <div
        className={styles["aspect-ratio-container"]}
        style={backgroundStyle}
      />
      <p className={styles["created-at"]}>{formatDate(createdAt)}</p>
    </div>
  );
};

export default VideoCard;
