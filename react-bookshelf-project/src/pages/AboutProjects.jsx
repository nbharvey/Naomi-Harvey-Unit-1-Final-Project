function AboutProjects() {
    let id = 0;
    function createData(project, describeproject) {
        id += 1;
        return { id, project, describeproject };
    }

    let rows = [
        createData('Project Title', 'Description'),

        createData('Bookshelf Project', 'Triathlon Tracker App coming soon!'),
        createData('This project blah de blah de blah', 'This will be sweet track app'),
    ];

    return (
        <table>
            {rows.map(row => (
                <tr key={row.id} style={{ backgroundColor: 'red' }}>
                    <td>{row.project}</td>
                    <td>{row.describeproject}</td>
                </tr>
            ))}
        </table>
    )


}

export default AboutProjects