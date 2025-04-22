import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  saveSocialMediaLinks,
  fetchSocialMediaLinks,
} from "@/lib/dataFetching";

export function useSocialMediaUpdater() {
  const queryClient = useQueryClient();

  const {
    data: links,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["social-media", "admin"],
    queryFn: fetchSocialMediaLinks,
  });

  const mutation = useMutation({
    mutationFn: saveSocialMediaLinks,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["social-media"] }),
    onError: (err) => console.error(err),
  });

  return {
    links,
    isLoading,
    isError,
    saveLinks: mutation.mutate,
    isSaving: mutation.isPending,
  };
}
