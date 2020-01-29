import { connect } from 'react-redux';
import TaskCard from './taskcard';
import { update } from '../../actions';

const mapState = ({ tasks }) => ({ tasks });

const mapDispatch = (dispatch) => ({
    moveTask: (task, status) => {
        dispatch(update({ ...task, status }));
    }
});

export default connect(mapState, mapDispatch)(TaskCard);