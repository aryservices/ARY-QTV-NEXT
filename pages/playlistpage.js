import { NextSeo } from "next-seo";

const PlaylistPage = ({ data }) => {
  return (
    <>
      <NextSeo
        title={`${data.title} | Watch All Latest Episodes`}
        description={`Catch all episodes of ${data.title} in HD.`}
        canonical={`http://localhost:3000/playlist/${data.id}`}
        openGraph={{
          url: `http://localhost:3000/playlist/${data.id}`,
          title: `${data.title} | Watch All Latest Episodes`,
          description: `Catch all episodes of ${data.title} in HD.`,
          images: [
            {
              url: `https://example.com/images/${data.image}`,
              width: 800,
              height: 600,
              alt: `${data.title} Image`,
            },
          ],
        }}
      />
      <h1>{data.title}</h1>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  // Mock Data
  const data = {
    id,
    title: "Example Playlist",
    image: "example.jpg",
  };

  return { props: { data } };
}

export default PlaylistPage;
