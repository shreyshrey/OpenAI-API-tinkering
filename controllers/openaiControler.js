const openai = require("../config/openaiConfig")


const generateMeta = async (title) => {
    const description = await openai.chat.completions.create({
        model: "gpt-4",
        messages : [{
            role: 'user',
            content: `Come up with a description for a YouTube video called ${title}`
        },
    ],
    })
    console.log(description.choices[0].message.content)

    const tags = await openai.chat.completions.create({
        model: "gpt-4",
        messages : [{
            role: 'user',
            content: `Come up with 10 keywords for a Youtube video called ${title}`
        },
    ],
    })
    console.log(tags.choices[0].message.content)

}

const generateImage = async (desc) => {
    const image = await openai.images.generate({
        model: "gpt-image-1",
        prompt: desc,
        n: 1,
        size: "1024x1024"
    })
    console.log(image.data[0].url)
}
module.exports = {generateMeta, generateImage}