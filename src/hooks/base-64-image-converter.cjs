const fs = require('fs')

const base64ImageConverter = async (imagePath) => {
  console.log(`Converting image to Base64: ${imagePath}`)

  try {
    const data = await fs.promises.readFile(imagePath)
    const base64Data = data.toString('base64')
    return base64Data
  } catch (error) {
    console.error('Error converting image to Base64:', error)
    throw error
  }
}

module.exports = base64ImageConverter;