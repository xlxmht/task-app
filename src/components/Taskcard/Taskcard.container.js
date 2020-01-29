import { connect } from 'react-redux';
import TaskCard from './taskcard';

const mapState = ({ tasks }) => ({ tasks });

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(TaskCard);