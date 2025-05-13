import { SEND_TG_NOTIFICATION_ROUTE } from "@/lib/constants";
import { http } from "@/lib/http";

export const sendTgNotification = async () => {
  try {
    const response = await http.post(SEND_TG_NOTIFICATION_ROUTE);
    return response.data;
  } catch (e) {
    throw new Error(e as string);
  }
};
