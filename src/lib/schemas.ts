import { Category } from "@prisma/client"
import { z } from "zod"

export const submitPostSchema = z.object({
	title: z.string(),
	category: z.nativeEnum(Category),
	content: z.string()
})
