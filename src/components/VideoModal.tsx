import { Video } from "@/types";
import styles from "@/styles/VideoModal.module.scss";

interface VideoModalProps {
  video: Video | null;
  onClose: () => void;
}

const VideoModal = ({ video, onClose }: VideoModalProps) => {
  if (!video) {
    // Renders nothing if video is null
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <video controls autoPlay>
          <source src={video.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button onClick={onClose} className={styles.closeButton}>
          <span>X</span>
        </button>
      </div>
    </div>
  );
};

export default VideoModal;
