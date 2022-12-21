package m426.agiles.backend.security.services;

import m426.agiles.backend.exception.ProjectIdException;
import m426.agiles.backend.exception.ProjectNotFoundException;
import m426.agiles.backend.models.Project;
import m426.agiles.backend.models.User;
import m426.agiles.backend.repository.ProjectRepository;
import m426.agiles.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserRepository userRepository;

    public Project saveOrUpdateProject(Project project, String username){

        if(project.getId() != null){
            Project existingProject = projectRepository.findByProjectIdentifier(project.getProjectIdentifier());

            if (existingProject != null && (!existingProject.getProjectLeader().equals(username))) {
                throw new ProjectNotFoundException("Project not found in your account");
            }else if(existingProject == null){
                throw new ProjectNotFoundException("Projekt with ID: '" + project.getProjectIdentifier() + "' cannot be updated because the project does not exist!");
            }
        }

        try{

            User user = userRepository.findByUsername(username);

            project.setUser(user);
            project.setProjectLeader(user.getUsername());
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());

            return projectRepository.save(project);
        }catch (Exception e){
            /*check id projectId is unique, if not, throw exception*/
            throw new ProjectIdException("Project with ID '" + project.getProjectIdentifier().toUpperCase() + "' doesn't exist");
        }
    }

    public Project findProjectByIdentifier(String projectId, String username){

        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());

        /*If project does not exist, throw exception*/
        if(project==null){
            throw new ProjectIdException("Project with ID '" + projectId.toUpperCase() + "' doesn't exist");
        }

        //System.out.println("PLeadr: " + project.getProjectLeader() + " -- username : " + username);
        if(!project.getProjectLeader().equals(username)){
            throw new ProjectNotFoundException("Project not found on this account");
        }

        return project;
    }

    public Iterable<Project> findAllProjects(String username){
        Iterable<Project> allProjects = projectRepository.findAllByProjectLeader(username);

        return allProjects;
    }

    public void deleteProjectByIdentifier(String projectId, String username){

        projectRepository.delete(findProjectByIdentifier(projectId, username));
    }

}
