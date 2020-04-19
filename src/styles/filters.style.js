import theme from '../styles/theme.style';

export default {
  wrapper: {
    height: '100%',
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  filters: {
    paddingBottom: 50,
    paddingLeft: 20,
  },
  counter: {
    paddingTop: 10,
    paddingLeft: 20,
    color: theme.COLOR_SECONDARY,
    marginBottom: 20,
  },
  filterTitle: {
    marginBottom: 5,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  filter: {
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  slider: {
    marginTop: 10,
    marginBottom: 30,
    width: '80%',
  },
};
