package m426.agiles.backend.repository;


import m426.agiles.backend.models.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


//test
@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {
    Project findByProjectIdentifier(String projectId);

    @Override
    Iterable<Project> findAll();

    Iterable<Project> findAllByProjectLeader(String username);
}
