# Security Policy

## Supported versions

This is a personal portfolio site. Only the currently deployed production
build (the `main` branch, deployed at <https://fahimyusuf.com.bd/>)
receives fixes; older deployments are not supported.

## Reporting a vulnerability

If you find a security issue in this site or its repository, please report it
privately by email to **fahim.yusuf06@gmail.com** — the same address published
on the site's contact section.

Please avoid opening public issues for anything security-sensitive. Include
reproduction steps if you can. There is no bug bounty program; reports are
handled on a best-effort basis.

## Scope notes (verified, not claims)

- The site is a static frontend plus one serverless endpoint (`/api/contact`)
  that sends email via SMTP.
- The contact endpoint validates input, strips header-injection characters,
  uses a honeypot, and rate-limits submissions per IP address.
- No accounts, sessions, payments, file uploads, or databases exist in this
  project.
