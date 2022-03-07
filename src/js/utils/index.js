const formatDate = (date) => (
  new Date(Date.parse(date)).toLocaleDateString('en-US', { timeZone: 'UTC' })
);

export { formatDate };
