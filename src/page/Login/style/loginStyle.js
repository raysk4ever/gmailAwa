import colors from '../../components/unit/colors';
import Font from '../../components/unit/fonts';
module.exports = {
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  head: {
    color: colors.red,
    fontSize: 36,
    textAlign: 'center',
    marginTop: 50,
    fontFamily: Font.fantasy,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    margin: 10,
    color: 'red',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: colors.red,
  },
  login: {
    padding: 16,
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    width: '85%',
    height: 50,
    // textAlign: 'center',
    borderWidth: 1,
    borderColor: colors.light_red,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 6,
    paddingLeft: 20,
  },
};
