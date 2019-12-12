package kukshinov.project.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "survey")
public class Survey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "creation_time")
    private Date creationDate;
    @Column(name = "avail_time")
    private Date availUntil;
    @Column
    private String description;
    private Report surveyForReport;
//    @OneToMany
//    @JoinTable(
//
//    )

    public Survey(Date creationDate, Date availUntil, String description, Report surveyReport) {
        this.creationDate = creationDate;
        this.availUntil = availUntil;
        this.description = description;
        this.surveyForReport = surveyReport;
    }

    public Survey() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public Date getAvailUntil() {
        return availUntil;
    }

    public void setAvailUntil(Date availUntil) {
        this.availUntil = availUntil;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Report getSurveyForReport() {
        return surveyForReport;
    }

    public void setSurveyForReport(Report surveyForReport) {
        this.surveyForReport = surveyForReport;
    }
}
