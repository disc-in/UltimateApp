import theme from '../styles/theme.style';

export default {
  wrapper: {
    flex: 1,
    height: '100%',
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  filters: {
    paddingBottom: 50,
    paddingHorizontal: 10,
  },
  filterTitle: {
    marginBottom: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  filter: {
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  footer: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    paddingBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
};
