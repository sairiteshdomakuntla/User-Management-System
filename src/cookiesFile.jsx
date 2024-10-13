import Cookies from "js-cookie";

export const saveStateToCookies = (state) => {
  try {
    Cookies.set('userManagementState', JSON.stringify(state), { expires: 7 });
  } catch (error) {
    console.error('Error saving state to cookies:', error);
  }
};

export const loadStateFromCookies = () => {
  try {
    const savedState = Cookies.get('userManagementState');
    return savedState ? JSON.parse(savedState) : undefined;
  } catch (error) {
    console.error('Error loading state from cookies:', error);
    return undefined;
  }
};