import { connect } from 'react-redux';
import TaskColumn from './taskcolumn';

const mapState = ({ tasks }, ownProps) => {
    const { template } = ownProps;
    return { tasks: tasks.filter(task => task.status === template.title) };
};

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(TaskColumn);