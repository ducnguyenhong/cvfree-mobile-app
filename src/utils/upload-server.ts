import axios from 'axios';

export const uploadServer = (
  img: any,
  id: string,
  folderServer?: string,
  format?: string,
) => {
  if (!img) {
    return Promise.resolve(null);
  }

  const formData = new FormData();
  formData.append('image', img);
  return axios
    .post(
      `/media/upload/${folderServer ?? 'images'}/${id}/${format || 'png'}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
    .then((response: any) => {
      const { data } = response.data;
      return data.url;
    })
    .catch(e => {
      throw new Error(e);
    });
};
