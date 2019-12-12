package kukshinov.project.entity;


import javax.persistence.*;

@Entity
@Table(name = "status")
public class Status {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private Report statusForReport;


    public Status(String name, Report statusForReport) {
        this.name = name;
        this.statusForReport = statusForReport;
    }

    public Status() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Report getStatusForReport() {
        return statusForReport;
    }

    public void setStatusForReport(Report statusForReport) {
        this.statusForReport = statusForReport;
    }

}
