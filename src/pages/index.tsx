import Head from "next/head";
import { Video } from "@/types";
import Header from "@/components/Header";
import VideoList from "@/components/VideoList";

type HomeProps = {
  data: Video[];
};

export default function Home({ data }: HomeProps) {
  const sortedData = data.sort((a, b) => b.createdAt - a.createdAt);
  const groupedVideos = groupVideosByCategory(sortedData);

  return (
    <>
      <Head>
        <title>Powder Front-end Test</title>
        <meta name="description" content="Powder Front-end Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="app">
        <Header />
        {Object.entries(groupedVideos).map(([category, videos]) => (
          <VideoList title={category} videos={videos} />
        ))}
      </main>
    </>
  );
}

function groupVideosByCategory(videos: Video[]): Record<string, Video[]> {
  const grouped: Record<string, Video[]> = {};

  videos.forEach((video) => {
    if (!grouped[video.category]) {
      grouped[video.category] = [];
    }
    grouped[video.category].push(video);
  });

  return grouped;
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://assets.dev.verse-core.vrse.gg/frontend-interview/data.json"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
