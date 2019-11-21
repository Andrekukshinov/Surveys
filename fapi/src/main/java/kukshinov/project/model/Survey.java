package kukshinov.project.model;

import java.util.List;

public class Survey {
    private long id;
    private List<Questions> questions;
    private String author;
    private long creationTime;
    private long availabilityTime;
    private String surveyTitle;
    private String description;

    public Survey(long id, List<Questions> questions, String author, long creationTime, long availabilityTime, String surveyTitle, String description) {
        this.id = id;
        this.questions = questions;
        this.author = author;
        this.creationTime = creationTime;
        this.availabilityTime = availabilityTime;
        this.surveyTitle = surveyTitle;
        this.description = description;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setQuestions(List<Questions> questions) {
        this.questions = questions;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setCreationTime(long creationTime) {
        this.creationTime = creationTime;
    }

    public void setAvailabilityTime(long availabilityTime) {
        this.availabilityTime = availabilityTime;
    }

    public void setSurveyTitle(String surveyTitle) {
        this.surveyTitle = surveyTitle;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getId() {
        return id;
    }

    public List<Questions> getQuestions() {
        return questions;
    }

    public String getAuthor() {
        return author;
    }

    public long getCreationTime() {
        return creationTime;
    }

    public long getAvailabilityTime() {
        return availabilityTime;
    }

    public String getSurveyTitle() {
        return surveyTitle;
    }

    public String getDescription() {
        return description;
    }

}
