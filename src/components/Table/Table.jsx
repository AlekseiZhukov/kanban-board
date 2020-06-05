import React from 'react';
import TableElement from '../TableElement/TableElement';


class Table extends React.Component {
    render() {
        const {tasks, title } = this.props;

        return (
            <div className="table">
                {tasks.map((task, index)=> {
                    if (task.title === title) {
                        return ( 
                            <TableElement 
                                taskName={task.name}
                                key={index}
                                id={index}
                                    
                            />
                        )
                    } else return null;
                            
                }
                )}
                        
            </div>
        )
    }
}

export default Table;





