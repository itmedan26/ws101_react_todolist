function MissedGoal() {
    return <h3> You Missed</h3>
}
function MadeGoal() {
    return <h3> GOAL!!!!</h3>
}

function Goal(props) {
    const isGoal = props.isGoal;

    // if (isGoal) {
    //      return <MadeGoal />;
    // }
    // return <MissedGoal />

    if (isGoal) {
        return <Made Goal />;
    }
    return <MissedGoal />

}

export default Goal;