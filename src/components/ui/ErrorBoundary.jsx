import { Component } from "react";
import styles from "./ErrorBoundary.module.css";

// Root crash guard — the SPA equivalent of a 500 page. Renders a calm
// recovery screen instead of a blank document. Technical detail goes to the
// console only; users never see stack traces or internals.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("[app] Unexpected render failure:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.screen} role="alert">
          <h1 className={styles.title}>Something went wrong</h1>
          <p className={styles.text}>
            An unexpected error interrupted the page. Nothing is lost — this
            site stores nothing on your device beyond a theme preference.
          </p>
          <a className={styles.action} href="/">
            Reload the site
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}
