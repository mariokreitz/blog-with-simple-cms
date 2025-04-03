import ImagesSliderWrapper from "@/components/ImageSlider";
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
    </HydrationBoundary>
  );
};

export default App;
