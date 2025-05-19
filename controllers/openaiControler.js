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

module.exports = {generateMeta}