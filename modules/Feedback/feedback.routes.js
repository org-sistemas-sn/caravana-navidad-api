import { postFeedback } from './feedback.controller.js'

const feedbackRoutes = (app) => {
    app.post('/feedback', postFeedback)
}

export default feedbackRoutes