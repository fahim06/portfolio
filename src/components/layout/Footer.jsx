import { version as appVersion } from "../../../package.json";
import { site } from "../../config/site.js";
import { socials } from "../../config/social.js";
import { personalInfo } from "../../data/personalInfo.js";
import Icon from "../ui/Icon.jsx";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <h3 className={styles.brand}>{site.brandName}</h3>
            <p className={styles.tagline}>
              Building thoughtful solutions, one line of code at a time.
            </p>
          </div>
          <div className={styles.connectCol}>
            <h4 className={styles.connectTitle}>Connect</h4>
            <div className={styles.socials}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target={s.url.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label={s.name}
                >
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <a className={styles.legal} href="/accessibility">
            Accessibility
          </a>
          <p className={styles.copy}>
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className={styles.meta}>v{appVersion}</p>
        </div>
      </div>
    </footer>
  );
}
