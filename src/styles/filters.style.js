import theme from '../styles/theme.style';

export default {
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
  slider: {
    marginTop: 10,
    marginBottom: 30,
    width: '80%',
  },
};
