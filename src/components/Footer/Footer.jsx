import React from 'react';

class Footer extends React.Component {

        render () {
             const {tasks} = this.props
             const activeTasks = tasks.reduce((sum, task) => {
                if (task.title === "backlog") {
                    return sum + 1
                } else return sum
            }, 0)
            const finishedTasks = tasks.reduce((sum, task) => {
                if (task.title === "finished") {
                    return sum + 1
                } else return sum
            }, 0)
            
            return (
                <div className="footer_wrapper">
                    <div className="footer_countValueBlock">
                        <div> Active tasks: {activeTasks}</div>
                        <div> Finished tasks: {finishedTasks}</div>
                    </div>
                    <div className="footer_wrapper__author">Kanban board by Aleksey Zhukov, 2020</div>
                </div>
            )        
        

            
        }
}


export default Footer;