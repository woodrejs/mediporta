import { QueryClient } from "react-query";

export const client = new QueryClient({
  defaultOptions: { queries: { staleTime: 30000 } },
});
