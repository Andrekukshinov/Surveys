package kukshinov.project.entity;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "surname")
    private String lastName;
    private String password;
    private String email;
    private Report surveyForReport;

    public User() {
    }

    public User(String firstName, String lastName,
                String password, String email, Report surveyReport) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.surveyForReport = surveyReport;
    }

    public Report getSurveyForReport() {
        return surveyForReport;
    }

    public void setSurveyForReport(Report surveyForReport) {
        this.surveyForReport = surveyForReport;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
