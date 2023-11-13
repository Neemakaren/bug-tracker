
const BugTable = (props) => {
    const { bugs, onDeleteBug } = props;
    const resolvedPressed = (id) => {
        onDeleteBug(id);
    };

    return <table>
        <thead>
            <tr>
                <th>Description</th>
                <th>Priority</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {bugs.length === 0 && <tr><td>No Bugs Found</td></tr>}
            {bugs.length > 0 && bugs.map(bug => <tr key={bug.id}>
                <td>{bug.description}</td>
                <td>{bug.priority}</td>
                <td><button onClick={() => resolvedPressed(bug.id)}>Resolved</button></td>
            </tr>)}
        </tbody>
    </table>
};

export default BugTable;