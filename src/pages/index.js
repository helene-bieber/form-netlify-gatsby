import React from "react"

import Layout from "../components/layout"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      feedbackMessage: "",
    }

    this.handleFeedbackChange = this.handleFeedbackChange.bind(this)
  }

  handleFeedbackChange(event) {
    const value = event.target.value
    this.setState({ feedbackMessage: value })
  }
  render() {
    return (
      <Layout>
        <form
          name="feedbackDashboard"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          method="POST"
        >
          <input type="hidden" name="form-name" value="feedbackDashboard" />
          <textarea
            id="feedbackMessage"
            type="text"
            placeholder="Feedback?"
            name="feedbackMessage"
            onChange={this.handleFeedbackChange}
            value={this.state.feedbackMessage}
            required
          />
          <button type="submit" value="Submit">
            Send
          </button>
        </form>
      </Layout>
    )
  }
}

export default IndexPage
