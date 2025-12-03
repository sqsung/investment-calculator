import { z } from "zod";

export const holdingSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().min(1).max(100),
  stable: z.number().min(0).max(100),
  growth: z.number().min(0).max(100),
  category: z.enum(["stocks", "bonds", "alternatives", "cash"]),
});

export type HoldingSchema = z.infer<typeof holdingSchema>;
