package m426.agiles.backend.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class Project {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @NotBlank
        @Size(max = 20, message = "Project name is required")
        private String projectName;

        @NotBlank(message = "Project name is required")
        @Size(min = 4, max = 5, message = "Your Project Identifier must be 4 - 5 characters") //Example: ABCDE1, 5493
        @Column(updatable = false, unique = true)
        private String projectIdentifier;

        @NotBlank(message = "Project description is required")
        private String description;


        @ManyToOne(fetch = FetchType.LAZY)
        @JsonIgnore
        User user;

        private String projectLeader;

        public Project(){

        }

        public Long getId() {
                return id;
        }

        public void setId(Long id) {
                this.id = id;
        }

        public String getProjectName() {
                return projectName;
        }

        public void setProjectName(String projectName) {
                this.projectName = projectName;
        }

        public String getProjectIdentifier() {
                return projectIdentifier;
        }

        public void setProjectIdentifier(String projectIdentifier) {
                this.projectIdentifier = projectIdentifier;
        }

        public String getDescription() {
                return description;
        }

        public void setDescription(String description) {
                this.description = description;
        }

        public User getUser() {
                return user;
        }

        public void setUser(User user) {
                this.user = user;
        }

        public String getProjectLeader() {
                return projectLeader;
        }

        public void setProjectLeader(String projectLeader) {
                this.projectLeader = projectLeader;
        }
}
