export function buildMailto({ to, subject = '', body = '' }) {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString().replaceAll('%20', '+');
  return `mailto:${to}${query ? `?${query}` : ''}`;
}
