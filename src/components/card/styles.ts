import { StyleSheet, Platform } from 'react-native';

const defaultStyles = {
  padding: 12,
};
export default StyleSheet.create({
  cardContainer: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ccc',
    flexWrap: 'nowrap',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
  },
  cardHeader: {
    ...defaultStyles,
  },
  cardBody: {
    ...defaultStyles,
    marginTop: 2,
    marginBottom: 2,
  },
  cardFooter: {
    ...defaultStyles,
    paddingTop: 4,
    paddingBottom: 12,
  },
  cardItemContainer: {
    ...defaultStyles,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardItemImage: {
    width: 56,
    height: 56,
  },
  cardItem: {
    padding: 12,
    justifyContent: 'center',
  },
  cardItemButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  cardItemButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
