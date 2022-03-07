import { fieldMap as userFieldMap } from 'js/constants/users';

const publicHeaders = { 'Content-Type': 'application/json' };

const getLoggedInHeaders = (token) => ({
  ...publicHeaders,
  Authorization: `Token ${token}`,
});

const formatPayload = (payload, fieldMap) => (
  Object.keys(payload).reduce((acc, field) => {
    const { [field]: formattedField = field } = fieldMap;
    acc[formattedField] = payload[field];
    return acc;
  }, {})
);

const formatUserPayload = (payload) => formatPayload(payload, userFieldMap);

export {
  publicHeaders,
  getLoggedInHeaders,
  formatUserPayload,
};
