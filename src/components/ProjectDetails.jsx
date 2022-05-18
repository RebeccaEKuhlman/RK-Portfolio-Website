/**
 * Full project description
 */
export const ProjectDetails = () =>
{ 
    const [project, setProject] = useState(undefined);
    const mergeProject = delta => setProject({ ...project, ...delta });

    return <div>
        <img src="" alt=""></img>
        <h3>{project.name}</h3>
        <button>See Details</button>
            <p>project details</p>
        
    </div>
}