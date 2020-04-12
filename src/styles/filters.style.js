import theme from '../styles/theme.style';

export default {
  headerButtonText: {
    paddingRight: 20,
    fontSize: theme.FONT_SIZE_LARGE,
  },
  wrapper: {
    height: '100%',
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  filters: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  counter: {
    paddingTop: 10,
    paddingLeft: 20,
    color: theme.COLOR_SECONDARY,
    marginBottom: 20,
  },
  filterTitle: {
    marginTop: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  filter: {
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    borderColor: theme.BORDER_COLOR_BUTTON,
    backgroundColor: theme.BACKGROUND_COLOR_BUTTON,
    borderWidth: 1,
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeButton: {
    borderColor: theme.BORDER_COLOR_BUTTON_ACTIVE,
    backgroundColor: theme.BACKGROUND_COLOR_BUTTON_ACTIVE,
  },
  buttonText: {
    textTransform: 'capitalize',
  },
  slider: {
    marginTop: 10,
    marginBottom: 30,
    width: '80%',
  },
};
