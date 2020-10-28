import { Link } from "gatsby"
import React from "react"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayFeedback: "none",
      feedbackMessage: "",
      backgroundFeedbackButton: "#f3f3f3",
      colorFeedbackButton: "rgba(0, 0, 0, 0.7)",
    }
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.handleFeedbackClick = this.handleFeedbackClick.bind(this)
    this.handleFeedbackChange = this.handleFeedbackChange.bind(this)
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside, false)
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside, false)
  }

  handleClickOutside(e) {
    if (this.state.displayFeedback === "block") {
      if (this.nodeFeedback.contains(e.target)) {
        return
      }
      this.setState({ displayFeedback: "none" })
      this.setState({ feedbackMessage: "" })
      this.setState({ colorFeedbackButton: "rgba(0, 0, 0, 0.7)" })
    }
    if (this.state.displayLogout === "block") {
      if (this.nodeLogout.contains(e.target)) {
        return
      }
      this.setState({ displayLogout: "none" })
    }
  }

  handleFeedbackClick() {
    if (this.state.displayFeedback === "none") {
      this.setState({ displayFeedback: "block" })
    }
  }

  handleButton(value) {
    if (value !== "") {
      this.setState({ backgroundFeedbackButton: "#314267" })
      this.setState({ colorFeedbackButton: "#ffffff" })
    } else {
      this.setState({ backgroundFeedbackButton: "#f3f3f3" })
      this.setState({ colorFeedbackButton: "rgba(0, 0, 0, 0.7)" })
    }
  }

  handleFeedbackChange(event) {
    const value = event.target.value
    this.setState({ feedbackMessage: value })
    this.handleButton(value)
  }

  render() {
    return (
      <header
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Test
            </Link>
          </h1>
        </div>
        <button className="feedback" onClick={this.handleFeedbackClick}>
          Feedback?
        </button>

        <form
          name="feedbackDashboard"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          method="POST"
          ref={nodeFeedback => (this.nodeFeedback = nodeFeedback)}
          style={{ display: this.state.displayFeedback }}
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
          <button
            type="submit"
            value="Submit"
            disabled={this.state.feedbackMessage < 1}
            style={{
              backgroundColor: this.state.backgroundFeedbackButton,
              color: this.state.colorFeedbackButton,
            }}
            className="button button-small"
          >
            Send
          </button>
        </form>
      </header>
    )
  }
}

export default Header
