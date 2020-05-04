import theme from '../styles/theme.style';

export default {
  wrapper: {
    height: '100%',
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  filters: {
    paddingBottom: 50,
    paddingHorizontal: 10,
  },
  counter: {
    paddingTop: 10,
    paddingLeft: 20,
    color: theme.COLOR_SECONDARY,
    marginBottom: 20,
  },
  filterTitle: {
    marginBottom: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  filter: {
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
};
