import { GET_DEALS_ROUTE } from "@/lib/constants";
import { http } from "@/lib/http";

export const getDeals = async () => {
  try {
    const response = await http.get(GET_DEALS_ROUTE);
    return response.data;
  } catch (e) {
    throw new Error(e as string);
  }
};
