import colors from '../components/unit/colors';
import fonts from '../components/unit/fonts';
module.exports = {
  clean: {
    color: colors.light_red,
    fontWeight: 'bold',
    fontSize: 24,
    fontFamily: fonts.sans,
    // textAlign:"center"
    marginLeft: 20,
  },
  border: {
    marginTop: 18,
    elevation: 0.4,
    // backgroundColor: 'red',
  },
  all: {
    flexDirection: 'row',
    alignContent: 'center',
    padding: 18,
    marginLeft: 16,
    // backgroundColor: 'red',
  },
  inbox: {marginLeft: 20, alignSelf: 'center'},
  list: {padding: 10, marginLeft: 16, marginTop: 4},
  row: {
    flexDirection: 'row',
    alignContent: 'center',
    // backgroundColor: 'red',
  },
  footer: {
    // backgroundColor:"red"
    // borderTopWidth: 0.2,
    elevation: 0.5,
  },
};
