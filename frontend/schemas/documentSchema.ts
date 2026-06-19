import { z } from 'zod';

const DocumentSchema = z.object({
  filename: z.string().min(1, "file name is required"),
  mimeType: z.string().min(1, "mimetype is required"),
  size: z.number().min(1, "size is required"),
});

export default DocumentSchema