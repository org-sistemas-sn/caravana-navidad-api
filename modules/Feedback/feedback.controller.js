import Feedback from './feedback.model.js'

export const postFeedback = async (req, res) => {
    try {
        const { score, comments } = req.body

        await Feedback.create({ rate: score, text: comments })

        res.status(200).send()
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
}