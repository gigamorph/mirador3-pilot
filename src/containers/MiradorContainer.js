import { connect } from 'react-redux';
import { setSettings } from '../actions';
import Mirador from '../components/Mirador';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    setSettings: settings => {
      dispatch(setSettings(settings));
    }
  };
};

const MiradorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Mirador);

export default MiradorContainer;
