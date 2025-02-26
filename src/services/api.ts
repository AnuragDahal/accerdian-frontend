import axios from "axios";
import { ReferralFormValues } from "@/lib/validations/referral-schema";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const referralService = {
  submitReferral: async (referralData: ReferralFormValues) => {
    try {
      const response = await axios.post(`${API_URL}/referrals`, referralData);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error("Error submitting referral:", error);
      return {
        success: false,
        error: axios.isAxiosError(error)
          ? error.response?.data?.message || "Failed to submit referral"
          : "An unexpected error occurred",
      };
    }
  },
};
