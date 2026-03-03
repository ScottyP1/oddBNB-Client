import axios from 'axios'
import { api } from '@/api/client'

type PresignResponse = {
  uploadUrl: string
  fileUrl: string
}

export function useImageUpload() {
  const uploadImages = async (files: File[]): Promise<string[]> => {
    const uploadedUrls = await Promise.all(
      files.map(async (file) => {
        const presignRes = await api.post<PresignResponse>('/uploads/presign', {
          fileName: file.name,
        })

        const { uploadUrl, fileUrl } = presignRes.data

        await axios.put(uploadUrl, file, {
          headers: { 'Content-Type': file.type || 'application/octet-stream' },
        })

        return fileUrl
      }),
    )

    return uploadedUrls
  }

  return { uploadImages }
}
