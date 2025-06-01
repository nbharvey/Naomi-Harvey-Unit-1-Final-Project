import './AboutNaomi.css'
import { NavLink } from 'react-router-dom'

function AboutProjects() {
    const data = [
        {
            project: <NavLink to="/library" className={({ isActive }) => `project-link${isActive ? 'active-link' : ''}`}>Library</NavLink>,
            stack: 'React + Vite',
            purpose: "This app serves as a way for vistors of my website to interact with my content and leave their signature in the form of a book recommendation.",
            challenges: "Managing state complexity and the flow of data. I used props to share state between components and lifted state up to common ancestors when needed. This allowed my Form and Modal components to be synced, which was important when managing my books and my user books."
        },
        {
            project: <NavLink to="/nationalparkexplorer" className={({ isActive }) => `project-link${isActive ? 'active-link' : ''}`}>National Park Explorer</NavLink>,
            stack: 'React + TailwindCSS',
            purpose: "This app is a work in progress! It will generate facts for users about National Parks and give them trip advice.",
            challenges: "Using React Context to track state management in a maintable way."
        },
        {
            project: <NavLink to="/triathlontracker" className={({ isActive }) => `project-link${isActive ? 'active-link' : ''}`}>Triathlon Tracker</NavLink>,
            stack: 'React + Firebase',
            purpose: "This app is a work in progress! It will allow for user accounts and use more complex data access patterns like analyzing workouts and creating the next weeks workout plans dynamically.",
            challenges: "Creating an algorithim for calculating workouts and adjusting them based on a user's prior workout",
        },
    ]

    return (
        <>
            <h3 className='about-header'>👩🏽‍💻🍎 My Journey from Education to Software 🍎👩🏽‍💻 </h3>

            <p>
                I started my career in education, driven by a love for learning and
                problem-solving. Over time, I found myself increasingly drawn to the
                world of software engineering—where creativity, logic, and innovation
                collide. With support from my brother and a strong self-taught
                foundation, I made the leap into tech.
            </p>

            <table className='my-table'>
                <tr className='table-header'>
                    <th>Project Title</th>
                    <th>Tech Stack</th>
                    <th>Purpose of App</th>
                    <th>Challenges & Solutions</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.project}</td>
                            <td>{val.stack}</td>
                            <td>{val.purpose}</td>
                            <td>{val.challenges}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )


}

export default AboutProjects