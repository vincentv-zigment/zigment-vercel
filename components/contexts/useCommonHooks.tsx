import { useQueryClient } from "react-query";
import { useToast } from "@/hooks/useToast";

export const useCommonHooks = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return { queryClient, toast };
};