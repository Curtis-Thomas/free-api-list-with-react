import { z } from "zod";

export const HttpMethod = z.enum(["GET", "POST", "PUT", "PATCH", "DELETE"]);
export type HttpMethod = z.infer<typeof HttpMethod>;

export const EndpointSchema = z.object({
  path: z.string().min(1),
  method: HttpMethod,
  description: z.string().min(1),
  sampleRequest: z.string().optional(),
  sampleResponse: z.string().optional(),
});
export type Endpoint = z.infer<typeof EndpointSchema>;

export const AuthSchema = z.object({
  required: z.boolean(),
  type: z.enum(["none", "api_key", "oauth", "bearer", "basic"]).optional(),
  notes: z.string().optional(),
});
export type Auth = z.infer<typeof AuthSchema>;

export const Difficulty = z.enum(["beginner", "intermediate", "advanced"]);
export type Difficulty = z.infer<typeof Difficulty>;

export const Cors = z.enum(["yes", "no", "unknown"]);
export type Cors = z.infer<typeof Cors>;

export const Pricing = z.enum(["free", "freemium", "trial"]);
export type Pricing = z.infer<typeof Pricing>;

export const ApiEntrySchema = z.object({
  id: z
    .string()
    .regex(/^[a-z0-9-]+$/, "id must be kebab-case (lowercase letters, digits, hyphens)"),
  name: z.string().min(1),
  description: z.string().min(20).max(500),
  category: z
    .string()
    .min(1)
    .regex(/^[a-z0-9-]+$/, "category must be kebab-case"),
  difficulty: Difficulty,
  baseUrl: z.string().url(),
  documentationUrl: z.string().url(),
  auth: AuthSchema,
  endpoints: z.array(EndpointSchema).min(1),
  tags: z.array(z.string()).default([]),
  cors: Cors.default("unknown"),
  https: z.boolean().default(true),
  pricing: Pricing.default("free"),
  addedAt: z.string().date(),
});
export type ApiEntry = z.infer<typeof ApiEntrySchema>;

export const CategorySchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/, "category id must be kebab-case"),
  label: z.string().min(1),
  description: z.string().optional(),
});
export type Category = z.infer<typeof CategorySchema>;

export const CategoriesFileSchema = z.array(CategorySchema);
