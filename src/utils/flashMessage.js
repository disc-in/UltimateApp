import FlashMessage, { showMessage } from 'react-native-flash-message';

import theme from '../styles/theme.style';
import I18n from './i18n';

export const showSuccess = (description, ref = null) => {
  const params = {
    message: I18n.t('utils.snackbar.success'),
    description,
    type: 'success',
    floating: 'true',
    titleStyle: {
      fontSize: theme.FONT_SIZE_MEDIUM,
    },
    textStyle: {
      fontSize: theme.FONT_SIZE_SMALL,
    },
  };
  ref ? ref.showMessage(params) : showMessage(params);
};

export const showError = (description, ref = null) => {
  const params = {
    message: I18n.t('utils.snackbar.error'),
    description,
    type: 'danger',
    floating: 'true',
    titleStyle: {
      fontSize: theme.FONT_SIZE_MEDIUM,
    },
    textStyle: {
      fontSize: theme.FONT_SIZE_SMALL,
    },
  };
  ref ? ref.showMessage(params) : showMessage(params);
};

export default FlashMessage;
