import theme from '../styles/theme.style';

export default {
  wrapper: {
    paddingTop: 20,
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
    position: 'absolute',
    paddingBottom: 10,
    paddingTop: 5,
    bottom: 0,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    width: '100%',
    alignItems: 'center',
  },
};
