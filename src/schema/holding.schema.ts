import { z } from "zod";

export const holdingSchema = z.object({
  name: z
    .string()
    .min(1, "필수 항목입니다")
    .max(50, "50자를 이하로 입력해 주세요"),
  description: z.string().max(100, "100자 이하로 입력해 주세요").optional(),
  stable: z
    .number("필수 항목입니다")
    .min(0, "올바른 % 값을 알려주세요")
    .max(100, "올바른 % 값을 알려주세요"),
  growth: z
    .number("필수 항목입니다")
    .min(0, "올바른 % 값을 알려주세요")
    .max(100, "올바른 % 값을 알려주세요"),
  category: z.enum(
    ["stocks", "bonds", "alternatives", "cash"],
    "나중에 다시 시도해 주세요",
  ),
});

export type HoldingSchema = z.infer<typeof holdingSchema>;
