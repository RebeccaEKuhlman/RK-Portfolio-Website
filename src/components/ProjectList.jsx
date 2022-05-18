import { ProjectDetails } from "./ProjectDetails";
import GitHubIcon from '@mui/icons-material/GitHub';

export const homePage = () => { 
    const [projects, setProjects] = useState(undefined);
    /**
     * Add search bar, bar to keep track of where the user is in the page with scroll links
     */
    return <div>
        <GitHubIcon /> <></>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            <ul>
            {projects.map((project) =>
                <li>
                    <ProjectDetails value={project}/>
                </li>
            )}
            </ul>
    </div>
};

