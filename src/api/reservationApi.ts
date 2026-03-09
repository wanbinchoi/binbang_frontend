import axiosInstance from './axiosInstance';
import type { ReservationCreateRequest, ReservationResponse } from '../types/reservation';

// POST /api/reservation - 예약 생성 (로그인 필요)
export const createReservation = async (
  data: ReservationCreateRequest
): Promise<ReservationResponse> => {
  const response = await axiosInstance.post('/reservation', data);
  return response.data;
};
