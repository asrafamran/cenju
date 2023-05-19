import { base64ImageConverter } from "./base-64-image-converter";

export const fileUploadHandler = async (context) => {
  console.log(`Running hook FileUploadHandler on ${context.path}.${context.method}`);

  const { data } = context;

  if (data && data.image) {
    const image = data.image;
    const filePath = join(__dirname, 'path', 'to', 'upload', image.originalname);

    await new Promise((resolve, reject) =>
      createWriteStream(filePath)
        .on('finish', resolve)
        .on('error', reject)
        .end(image.buffer)
    );

    // Convert the uploaded image to Base64
    const base64Image = await base64ImageConverter(image);

    // Update the image property in the data object
    data.image = base64Image;
  }

  return context;
};