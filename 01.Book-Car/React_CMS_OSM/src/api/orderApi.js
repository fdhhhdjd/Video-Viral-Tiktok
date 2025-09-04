import { getAxios } from "@/services"

export const OrderGetAll = async () => {
  try {
    const response = await getAxios('/order/list')
    return response
  } catch (error) {
    throw new Error(error);
  }
}
