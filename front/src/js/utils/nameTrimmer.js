export const getFirstAndLastName = (name) => {
  if (!name) return { firstName: '', lastName: '' };

  const nameParts = name.trim().split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';

  return (firstName + ' ' + lastName);
}
