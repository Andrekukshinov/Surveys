package kukshinov.project.model;

import java.util.Arrays;
import java.util.List;

public class Questions {

    private long id;
    private String questionField;
    private List<String> answers;



    public Questions(long id, String questionField, String[] answers) {
        this.id = id;
        this.questionField = questionField;
        this.answers = Arrays.asList(answers);
    }
    public void setQuestionField(String questionField) {
        this.questionField = questionField;
    }

    public List<String> getAnswers() {
        return answers;
    }

    public void setAnswers(String[] answers) {
        this.answers = Arrays.asList(answers);
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getQuestionField() {
        return questionField;
    }

}
