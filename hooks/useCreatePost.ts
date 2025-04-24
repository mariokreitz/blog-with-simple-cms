import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BlogPost } from "@/types/BlogPost";

interface NewPost {
  title: string;
  image: string;
  description: string;
  content: string;
  author: string;
  tags: string[];
}

interface MutationContext {
  previousPosts?: BlogPost[];
}

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation<BlogPost, Error, NewPost, MutationContext>({
    mutationFn: (postData) =>
      axios.post<BlogPost>("/api/posts", postData).then((res) => res.data),

    onMutate: async (newPost) => {
      await queryClient.cancelQueries({ queryKey: ["posts", "admin"] });

      const previousPosts = queryClient.getQueryData<BlogPost[]>([
        "posts",
        "admin",
      ]);

      const tempPost: BlogPost = {
        ...newPost,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      queryClient.setQueryData<BlogPost[]>(
        ["posts", "admin"],
        (oldPosts = []) => [tempPost, ...oldPosts],
      );

      return { previousPosts };
    },

    onError: (_err, _newPost, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(["posts", "admin"], context.previousPosts);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts", "admin"] });
    },
  });
}
