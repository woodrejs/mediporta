import axios, { AxiosError } from "axios";
import { QueryFunctionContext, useQuery } from "react-query";
import { showErrorToast } from "../services/toastService";

export type Params = {
  page: number;
  pagesize: number;
  fromdate: number;
  todate: number;
  min: number;
  max: number;
  sort: "popular" | "activity" | "name";
  order: "desc" | "asc";
};
type Response = {
  items: API.Tag[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
};
type QueryKey = [Partial<Params> | undefined, "TAGS"];

const getTags = async (context: QueryFunctionContext<QueryKey>) => {
  const { data } = await axios.get<Response>("/tags", {
    params: {
      site: "stackoverflow",
      ...context.queryKey[0],
    },
  });

  return data;
};

export const useGetTags = (props?: Partial<Params>) => {
  return useQuery<Response, AxiosError<API.ErrorResponse>, Response, QueryKey>(
    [props, "TAGS"],
    {
      queryFn: getTags,
      onError: (err) => showErrorToast(err.response?.data.error_message),
    }
  );
};
