import * as z from "zod";

export const referralFormSchema = z.object({
  // Referrer details
  referrerName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  referrerEmail: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  referrerPhone: z.string().optional(),

  // Referee details
  refereeName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  refereeEmail: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  refereePhone: z.string().optional(),
});

export type ReferralFormValues = z.infer<typeof referralFormSchema>;
