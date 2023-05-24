import { Video } from "@/types";
import styles from "@/styles/VideoCard.module.scss";
import formatDate from "@/utils/formatDate";

interface VideoCardProps {
  video: Video;
  onClick: () => void;
}

const VideoCard = ({ video, onClick }: VideoCardProps) => {
  const { image, createdAt } = video;

  return (
    <div className={styles.videoCard} onClick={onClick}>
      <div className={styles.imageContainer}>
        <img
          alt={`video thumbnail ${createdAt}`}
          src={image}
          className={styles.image}
        />
      </div>
      <p className={styles.label}>{formatDate(createdAt)}</p>
    </div>
  );
};

export default VideoCard;
