import AboutMe from "@/components/AboutMe";
import ImagesSliderWrapper from "@/components/ImageSlider";
import Location from "@/components/Location";
import Posts, { getPosts } from "@/components/Posts";
import { getQueryClient } from "@/lib/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const App = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ImagesSliderWrapper />
      <Posts />
      <AboutMe />
      <Location />
    </HydrationBoundary>
  );
};

export default App;
