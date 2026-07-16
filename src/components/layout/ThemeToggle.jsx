import { useEffect, useId, useRef, useState } from "react";
import { THEMES, THEME_META } from "../../config/theme.js";
import { useClickOutside } from "../../hooks/useClickOutside.js";
import { useTheme } from "../../hooks/useTheme.jsx";
import Icon from "../ui/Icon.jsx";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { preference, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const itemRefs = useRef([]);
  const triggerId = useId();
  const menuId = useId();

  const meta = THEME_META[preference] || THEME_META.system;

  // Click-outside + Escape (only while open).
  useClickOutside(rootRef, () => close(), open);

  // When the menu opens, move focus to the active option.
  useEffect(() => {
    if (!open) return undefined;
    const idx = Math.max(0, THEMES.indexOf(preference));
    const raf = requestAnimationFrame(() => itemRefs.current[idx]?.focus());
    return () => cancelAnimationFrame(raf);
  }, [open, preference]);

  function close() {
    setOpen(false);
  }

  function toggle() {
    setOpen((o) => !o);
  }

  function choose(theme) {
    setTheme(theme);
    close();
    triggerRef.current?.focus();
  }

  function onTriggerKeyDown(event) {
    if (
      event.key === "ArrowDown" ||
      event.key === "ArrowUp" ||
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      setOpen(true);
    }
  }

  // Arrow / Home / End navigate and apply live; Enter/Space confirm; Tab/Escape leave.
  function onMenuKeyDown(event) {
    const idx = Math.max(0, THEMES.indexOf(preference));
    let next = null;
    switch (event.key) {
      case "ArrowDown":
        next = (idx + 1) % THEMES.length;
        break;
      case "ArrowUp":
        next = (idx - 1 + THEMES.length) % THEMES.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = THEMES.length - 1;
        break;
      case "Tab":
        close();
        return;
      case "Enter":
      case " ":
        event.preventDefault();
        choose(THEMES[idx]);
        return;
      default:
        return;
    }
    event.preventDefault();
    setTheme(THEMES[next]);
    itemRefs.current[next]?.focus();
  }

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        ref={triggerRef}
        id={triggerId}
        type="button"
        className={styles.trigger}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`Theme: ${meta.label}. Activate to choose.`}
        title={`Theme: ${meta.label}`}
        onClick={toggle}
        onKeyDown={onTriggerKeyDown}
      >
        <span
          key={preference}
          className={styles.triggerIcon}
          aria-hidden="true"
        >
          <Icon name={meta.icon} size={18} />
        </span>
        <span className={styles.triggerLabel}>{meta.label}</span>
        <Icon name="chevron-down" size={15} className={styles.chevron} />
      </button>

      <ul
        id={menuId}
        role="menu"
        aria-labelledby={triggerId}
        className={styles.menu}
        data-open={open}
        onKeyDown={onMenuKeyDown}
      >
        {THEMES.map((theme) => {
          const active = theme === preference;
          const item = THEME_META[theme];
          return (
            <li role="none" key={theme}>
              <button
                ref={(el) => {
                  itemRefs.current[THEMES.indexOf(theme)] = el;
                }}
                role="menuitemradio"
                type="button"
                aria-checked={active}
                tabIndex={-1}
                className={styles.option}
                data-active={active}
                onClick={() => choose(theme)}
                onMouseEnter={(e) => e.currentTarget.focus()}
              >
                <span className={styles.optionIcon} aria-hidden="true">
                  <Icon name={item.icon} size={17} />
                </span>
                <span className={styles.optionLabel}>{item.label}</span>
                <span
                  className={styles.check}
                  aria-hidden="true"
                  data-on={active}
                >
                  <Icon name="check" size={15} />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
