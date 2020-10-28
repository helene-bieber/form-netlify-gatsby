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
        <h1>Hello</h1>
      </Layout>
    )
  }
}

export default IndexPage
